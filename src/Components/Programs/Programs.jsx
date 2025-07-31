import React from "react";
import "./Programs.css";
import afrika from "../../assets/afrika.jpg";
import nahOsten from "../../assets/NahOsten.jpg";
import asien from "../../assets/asien.jpg";
import afrika_icon from "../../assets/afrika_icon.png";
import asien_icon from "../../assets/asien_icon.png";
import nahOsten_icon from "../../assets/nahosten_icon.png";

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={afrika} alt="Bild zu unserem Afrika-Programm" />
        <div className="caption">
          <img src={afrika_icon} alt="Afrika-Icon" />
          <p>Afrika</p>
        </div>
      </div>
      <div className="program">
        <img src={nahOsten} alt="Bild zu unserem Nahost-Programm" />
        <div className="caption">
          <img src={nahOsten_icon} alt="Nahost-Icon" />
          <p>NahOsten</p>
        </div>
      </div>
      <div className="program">
        <img src={asien} alt="Bild zu unserem Asien-Programm" />
        <div className="caption">
          <img src={asien_icon} alt="Asien-Icon" />
          <p>Asien</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
