import "../css/Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <div className="burger-menu">
        <label className="container">
          <input type="checkbox" />
          <div className="checkmark">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
      </div>
      <nav className="navMenu">
        <div>
          <a href="#">About me</a>
        </div>
        <div>
          <a href="#">Skills</a>
        </div>
        <div>
          <a href="#">Experience</a>
        </div>
        <div>
          <a href="#">Projects</a>
        </div>
        <div>
          <a href="#">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
