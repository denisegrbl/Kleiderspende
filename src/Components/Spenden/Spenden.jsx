import React from "react";
import { Link } from "react-router-dom"; // Importiere Link aus react-router-dom
import "./Spenden.css";
import packen from "../../assets/packen.jpg";

const Spenden = () => {
  return (
    <div className="spenden">
      <div className="spenden-left">
        <img src={packen} alt="Helfende Hände packen Kleider ein" className="packen-img" />
      </div>
      <div className="spenden-right">
        <h2>Spenden</h2>
        <p>Sie haben zwei Möglichkeiten, Kleiderspenden zu tätigen:</p>
        <h6>Bequem von zu Hause aus:</h6>
        <p>
          Sie Ihre Kleiderspenden bequem vor Ihrer Haustür abholen.Fomular
          ausfüllen und Abholung auswählen.
        </p>
        <h6>Persönlich zur Geschäftsstelle gehen:</h6>
        <p>
          Bringen Sie Ihre Kleiderspenden zu örtlichen Geschäftsstellen von uns.
          Dort können Sie Ihre Spenden persönlich abgeben.Formular ausfüllen und
          Übergabe an der Geschäftsstelle auswählen.
        </p>
        <p>
          Egal für welche Option Sie sich entscheiden, stellen Sie sicher, dass
          die Kleidung in gutem Zustand ist. Anschließend können Sie vor Ort ein
          Spendenformular ausfüllen und Ihre Spende übergeben. Ihre
          Unterstützung wird dabei helfen, Menschen in Not zu helfen und Gutes
          zu bewirken.
        </p>

        <Link to="/spendenformular" className="big-btn">
          Spenden
        </Link>
      </div>
    </div>
  );
};

export default Spenden;
