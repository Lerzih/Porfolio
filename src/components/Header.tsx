import DNI from "../assets/profile-picture.png";
import "../css/Header.css";

function Header() {
  return (
    
      <header className="center">
        <div className="center">
          <img className="profile-picture" src={DNI} />
        </div>
        <div className="center">
          <div>
            <h1 className="myName">Alexis Francisco Díaz Fajardo</h1>
          </div>
          <div>
            <h2 className="titleProfession">FullStack Developer</h2>
          </div>
        </div>
      </header>
    
  );
}

export default Header;
