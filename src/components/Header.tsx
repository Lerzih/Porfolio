import DNI from "../assets/Foto-desarrollador.jpeg";
import "../css/Header.css";

function Header() {
  return (
    
      <div className="main-section">
        <div className="">
          <img className="profile-picture" src={DNI} />
        </div>
        <div className="">
          <div>
            <h1 className="my-name">Alexis Francisco Díaz Fajardo</h1>
          </div>
          <div>
            <h2 className="title-profession">FullStack Developer</h2>
          </div>
        </div>
      </div>
    
  );
}

export default Header;
