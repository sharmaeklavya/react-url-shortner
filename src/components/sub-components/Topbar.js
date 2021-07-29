import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Topbar(props) {
  const history = useHistory();

  const handleLogout = async (e) => {
    try {
      if (e.target.innerText === "Log out") {
        const res = await Axios.get("https://node-mini.herokuapp.com/unauth");
        if (res.status === 200) {
          console.log("Log out");
          history.push("/");
        } else {
          history.push("/dashboard");
        }
      }
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <i className="fas fa-link me-3 logo__icon"></i>
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
              className="nav-item nav__item"
              onClick={handleLogout}
              to={props.link}
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
