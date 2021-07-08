import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function Topbar(props) {
  const handleLogout = () => {
    if (props.value === "Log out") {
      Cookies.remove("LJTSK");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <i className="fas fa-link me-3 logo-icon"></i>
        <span className="navbar-brand navbar__brand">Mini Urls</span>
        <input type="checkbox" name="checkbox" id="menu" />
        <button className="navbar-toggler">
          <label htmlFor="menu">
            <span className="navbar-toggler-icon"></span>
          </label>
        </button>
        <div className="collapse navbar-collapse" id="menu-content">
          <ul className="navbar-nav navbar__nav">
            <li className="nav-item nav__item">Features</li>
            <Link
              className="link nav__item"
              to={props.link}
              onClick={handleLogout}
            >
              {props.value}
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
