import React, { useState } from 'react';
import './SpendenFormular.css';

const SpendenFormular = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    abholung: false,
    adresse: '',
    plz: '',
    geschaeftsstelle: false,
    kleidung: {
      kleid: false,
      hose: false,
      jacke: false,
      socken: false,
    },
    krisengebiet: '',
    success: false
  });

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const date = now.toLocaleDateString('de-DE');
    return `${date} um ${hours}:${minutes < 10 ? '0' : ''}${minutes} Uhr`;
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'abholung' && checked) {
      setFormValues(prevState => ({
        ...prevState,
        abholung: true,
        geschaeftsstelle: false
      }));
    } else if (name === 'geschaeftsstelle' && checked) {
      setFormValues(prevState => ({
        ...prevState,
        abholung: false,
        geschaeftsstelle: true
      }));
    } else if (name === 'kleid' || name === 'hose' || name === 'jacke' || name === 'socken') {
      setFormValues(prevState => ({
        ...prevState,
        kleidung: {
          ...prevState.kleidung,
          [name]: checked
        }
      }));
    } else {
      setFormValues(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'plz' && value.length >= 2 && value.slice(0, 2) !== '90') {
      alert('Die ersten beiden Zahlen der Postleitzahl müssen "90" sein.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.abholung && !formValues.plz.startsWith('90')) {
      alert('Die Abholadresse muss mit den ersten beiden Zahlen 90 beginnen.');
      return;
    }
    setFormValues(prevState => ({ ...prevState, success: true }));
  };

  return (
    <div className='formular'>
      {formValues.success ? (
        <div className='angaben'>
          <h2>Vielen Dank für Ihre Spende!</h2>
          <h6>Hier sind Ihre Angaben:</h6>
          <p>Name: {formValues.name}</p>
          <p>Email: {formValues.email}</p>
          <p>Abholung: {formValues.abholung ? 'Ja' : 'Nein'}</p>
          {formValues.abholung && (
            <p>Abholadresse: {formValues.plz} {formValues.adresse}</p>
          )}
          <p>Art der Kleidung: {Object.keys(formValues.kleidung).filter(key => formValues.kleidung[key]).join(', ')}</p>
          <p>Krisengebiet: {formValues.krisengebiet}</p>
          <p>Datum und Uhrzeit: {getCurrentTime()}</p>
          <p>Ort: {formValues.abholung ? 'Abholadresse' : 'Geschäftsstelle'}</p>
        </div>
      ) : (
        <form className='formular-1' onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
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
            />
          </label>
          <br />
          <label>
            Abholung:
            <input
              type="checkbox"
              name="abholung"
              checked={formValues.abholung}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
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
                />
              </label>
              <br />
            </>
          )}

          <label>
            Art der Kleidung:
            <br />
            <label>
              Kleid
              <input
                type="checkbox"
                name="kleid"
                checked={formValues.kleidung.kleid}
                onChange={handleChange}
              />
            </label>
            <label>
              Hose
              <input
                type="checkbox"
                name="hose"
                checked={formValues.kleidung.hose}
                onChange={handleChange}
              />
            </label>
            <label>
              Jacke
              <input
                type="checkbox"
                name="jacke"
                checked={formValues.kleidung.jacke}
                onChange={handleChange}
              />
            </label>
            <label>
              Socken
              <input
                type="checkbox"
                name="socken"
                checked={formValues.kleidung.socken}
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
            >
              <option value="">Bitte auswählen</option>
              <option value="Afrika">Afrika</option>
              <option value="Asien">Asien</option>
              <option value="NahOsten">NahOsten</option>
            </select>
          </label>
          <br />
          <button className='btn' type="submit">Spende registrieren</button>
        </form>
      )}
    </div>
  );
};

export default SpendenFormular;
