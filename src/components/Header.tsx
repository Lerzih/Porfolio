import DNI from "../assets/Foto-desarrollador.jpeg";
import "../css/Header.css";
import HeaderDivider from "./HeaderDivider";

function Header() {
  return (
    <div className="main">
      <div className="main-section">
        <div>
          <img className="profile-picture" src={DNI} />
        </div>
        <div>
          <div>
            <h1 className="my-name">Alexis Francisco Díaz Fajardo</h1>
          </div>
          <div className="profession">
            <h2 className="title-profession">Appian Developer</h2>
          </div>
        </div>
      </div>
      <HeaderDivider />
    </div>
  );
}

export default Header;
