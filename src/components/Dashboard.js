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
      <div className="dash__vessel">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-flex justify-content-center align-items-center">
              <div
                className="nav nav-pills flex-column text-white"
                onClick={handleSection}
              >
                <button className="nav__item mb-3" id="profile">
                  <i className="far fa-user me-3"></i>
                  Profile
                </button>
                <button className="nav__item mb-3" id="generate">
                  <i className="fas fa-link me-3"></i>
                  Generate URLs
                </button>
                <button className="nav__item mb-3" id="history">
                  <i className="fas fa-history me-3"></i>
                  Recent URLs
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <main>{section}</main>
            </div>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
}

export default Dashboard;
