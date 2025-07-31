import "./Impressum.css";

const Impressum = () => {
  return (
    <div className="impressum">
      <div>
        <h1>Impressum</h1>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Max Mustermann
          <br />
          Musterstraße 111
          <br />
          Gebäude 44
          <br />
          90210 Musterstadt
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 (0) 123 44 55 66
          <br />
          Telefax: +49 (0) 123 44 55 99
          <br />
          E-Mail: mustermann@musterfirma.de
        </p>

        <p>
          Quelle:{" "}
          <a href="https://www.e-recht24.de/impressum-generator.html">
            https://www.e-recht24.de/impressum-generator.html
          </a>
        </p>
      </div>
    </div>
  );
};

export default Impressum;
