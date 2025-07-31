import { useState } from "react";
import "./SpendenFormular.css";
import { Link } from "react-router-dom";

const ZurueckButton = () => {
  return (
    <div className="back-btn">
      <Link to="/">Zurück zur Startseite</Link>
    </div>
  );
};

const SpendenFormular = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    abholung: false,
    adresse: "",
    plz: "",
    ort: "",
    geschaeftsstelle: false,
    kleidung: {
      Kleider: false,
      Hosen: false,
      Jacken: false,
      TShirts: false,
      Socken: false,
    },
    krisengebiet: "",
    success: false,
    abholungDatum: "",
  });

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const date = now.toLocaleDateString("de-DE");
    return `${date} um ${hours}:${minutes < 10 ? "0" : ""}${minutes} Uhr`;
  };

  const getRandomTime = () => {
    const randomHours = Math.floor(Math.random() * 8) + 9; // Random hours from 9 to 16
    const randomMinutes = Math.floor(Math.random() * 60); // Random minutes from 0 to 59
    return `${randomHours}:${randomMinutes < 10 ? "0" : ""}${randomMinutes}`;
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "abholung" && checked) {
      const currentDate = new Date();
      const fourDaysLater = new Date(
        currentDate.getTime() + 4 * 24 * 60 * 60 * 1000,
      );
      const formattedDate = fourDaysLater.toLocaleDateString("de-DE");
      const randomTime = getRandomTime();
      const abholungDatum = `${formattedDate} um ${randomTime} Uhr`;
      setFormValues((prevState) => ({
        ...prevState,
        abholung: true,
        geschaeftsstelle: false,
        abholungDatum: abholungDatum,
      }));
    } else if (name === "geschaeftsstelle" && checked) {
      setFormValues((prevState) => ({
        ...prevState,
        abholung: false,
        geschaeftsstelle: true,
        abholungDatum: "",
      }));
    } else if (
      name === "Kleider" ||
      name === "Hosen" ||
      name === "Jacken" ||
      name === "TShirts" ||
      name === "Socken"
    ) {
      setFormValues((prevState) => ({
        ...prevState,
        kleidung: {
          ...prevState.kleidung,
          [name]: checked,
        },
      }));
    } else {
      setFormValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "plz" && (value.length < 5 || value.slice(0, 2) !== "90")) {
      alert(
        'Die Postleitzahl muss mindestens 5 Zahlen enthalten und mit "90" beginnen.',
      );
    }
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const isNameValid = formValues.name.trim() !== "";
  const isEmailValid = formValues.email.trim() !== "";
  const isKrisengebietValid = formValues.krisengebiet !== "";
  const isKleidungValid = Object.values(formValues.kleidung).includes(true);
  const isAbholung = formValues.abholung;
  const isGeschaeftsstelle = formValues.geschaeftsstelle;

  // Prüfen ob mindestens Abholung oder Geschäftsstelle gewählt wurde
  if (!isAbholung && !isGeschaeftsstelle) {
    alert("Bitte wählen Sie entweder 'Abholung' oder 'Geschäftsstelle'.");
    return;
  }

  // PLZ-Prüfung bei Abholung
  if (isAbholung && !formValues.plz.startsWith("90")) {
    alert("Die Abholadresse muss mit den ersten beiden Zahlen 90 beginnen.");
    return;
  }

  // Geschäftsstelle: Kleidung ist erforderlich
  if (isGeschaeftsstelle) {
    if (!isNameValid || !isEmailValid || !isKrisengebietValid || !isKleidungValid) {
      alert("Bitte füllen Sie alle erforderlichen Felder aus und wählen Sie Kleidung aus.");
      return;
    }
  }

  // Abholung: Kleidung ist erforderlich
  if (isAbholung) {
    if (!isNameValid || !isEmailValid || !isKrisengebietValid || !isKleidungValid) {
      alert("Bitte füllen Sie alle erforderlichen Felder aus und wählen Sie Kleidung aus.");
      return;
    }
  }

  // Wenn alles korrekt ist
  setFormValues((prevState) => ({ ...prevState, success: true }));
};

  return (
    <div className="formular">
      {formValues.success ? (
        <div className="angaben">
          <h2>Vielen Dank für Ihre Spende!</h2>
          <h6>Hier sind Ihre Angaben:</h6>
          <p>Name: {formValues.name}</p>
          <p>Email: {formValues.email}</p>
          <p>
            Art der Kleidung:{" "}
            {Object.keys(formValues.kleidung)
              .filter((key) => formValues.kleidung[key])
              .join(", ")}
          </p>
          <p>Krisengebiet: {formValues.krisengebiet}</p>
           {formValues.abholung && (
            <>
              <p>
                Abholadresse: {formValues.plz} {formValues.adresse}
              </p>
              <p className="abholung">
                Wir würden am {formValues.abholungDatum} kommen!
              </p>
            </>
          )}
          <ZurueckButton />
          <p className="datum-zeit">{getCurrentTime()}</p>
          <p className="ort">
            {formValues.abholung
              ? `${formValues.plz} ${formValues.adresse}`
              : "Nürnberg"}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label className="checkbox-container">
            Abholung:
            <input
              type="checkbox"
              name="abholung"
              checked={formValues.abholung}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="checkbox-container">
            Geschäftsstelle:
            <input
              type="checkbox"
              name="geschaeftsstelle"
              checked={formValues.geschaeftsstelle}
              onChange={handleChange}
            />
          </label>
          <br />
          {formValues.abholung && (
            <>
              <label>
                Adresse:
                <input
                  type="text"
                  name="adresse"
                  value={formValues.adresse}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
              <label>
                PLZ:
                <input
                  type="text"
                  name="plz"
                  value={formValues.plz}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={5}
                  required
                />
              </label>
              <br />
              <label>
                Ort:
                <input
                  type="text"
                  name="ort"
                  value={formValues.ort}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
            </>
          )}

          <label>
            Art der Kleidung:
            <br />
            <br />
            <label className="checkbox-container">
              Kleider
              <input
                type="checkbox"
                name="Kleider"
                checked={formValues.kleidung.Kleider}
                onChange={handleChange}
              />
              </label>
              <label className="checkbox-container">
              TShirts
              <input
                type="checkbox"
                name="TShirts"
                checked={formValues.kleidung.TShirts}
                onChange={handleChange}
              />
            </label>
            <label className="checkbox-container">
              Hosen
              <input
                type="checkbox"
                name="Hosen"
                checked={formValues.kleidung.Hosen}
                onChange={handleChange}
              />
            </label>
            <label className="checkbox-container">
              Jacken
              <input
                type="checkbox"
                name="Jacken"
                checked={formValues.kleidung.Jacken}
                onChange={handleChange}
              />
            </label>
            <label className="checkbox-container">
              Socken
              <input
                type="checkbox"
                name="Socken"
                checked={formValues.kleidung.Socken}
                onChange={handleChange}
              />
            </label>
          </label>
          <br />
          <label>
            Krisengebiet:
            <select
              name="krisengebiet"
              value={formValues.krisengebiet}
              onChange={handleChange}
              required
            >
              <option value="">Bitte auswählen</option>
              <option value="Afrika">Afrika</option>
              <option value="Asien">Asien</option>
              <option value="NahOsten">NahOsten</option>
            </select>
          </label>
          <br />
          <button className="small-btn" type="submit">
            Spende registrieren
          </button>
        </form>
      )}
    </div>
  );
};

export default SpendenFormular;
