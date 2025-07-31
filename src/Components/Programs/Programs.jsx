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
        <img src={afrika} alt="" />
        <div className="caption">
          <img src={afrika_icon} alt="" />
          <p>Afrika</p>
        </div>
      </div>
      <div className="program">
        <img src={nahOsten} alt="" />
        <div className="caption">
          <img src={nahOsten_icon} alt="" />
          <p>NahOsten</p>
        </div>
      </div>
      <div className="program">
        <img src={asien} alt="" />
        <div className="caption">
          <img src={asien_icon} alt="" />
          <p>Asien</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
