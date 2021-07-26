import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Topbar from "./sub-components/Topbar";
import Bottombar from "./sub-components/Bottombar";
import Profile from "./sub-components/Profile";
import Urlhistory from "./sub-components/Urlhistory";
import Generate from "./sub-components/Generate";

function Dashboard() {
  const [section, setSection] = useState(<Profile />);
  const handleSection = (e) => {
    const target = e.target.id;
    switch (target) {
      case "profile":
        setSection(<Profile />);
        break;
      case "generate":
        setSection(<Generate />);
        break;
      case "history":
        setSection(<Urlhistory />);
        break;
      default:
    }
  };
  return (
    <>
      <Helmet>
        <title>Dashboard / Mini Urls</title>
      </Helmet>
      <Topbar value="Log out" link="/"></Topbar>
      <div className="dash-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="d-flex flex-column flex-shrink-0 mx-auto text-dark"
                style={{ width: "250px" }}
              >
                <ul
                  className="nav nav-pills section-btn flex-column text-white mt-5"
                  onClick={handleSection}
                >
                  <li className="nav-item nav__item mb-3" id="profile">
                    <i className="far fa-user me-3"></i>
                    Profile
                  </li>
                  <li className="nav-item nav__item mb-3" id="generate">
                    <i className="fas fa-link me-3"></i>
                    Generate URLs
                  </li>
                  <li className="nav-item nav__item mb-3" id="history">
                    <i className="fas fa-history me-3"></i>
                    Recent URLs
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <main className="my-5">{section}</main>
            </div>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
}

export default Dashboard;
