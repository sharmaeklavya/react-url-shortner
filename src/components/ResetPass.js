import { Helmet } from "react-helmet-async";
import Topbar from "./sub-components/Topbar";
import Bottombar from "./sub-components/Bottombar";

function ResetPass() {
  return (
    <>
      <Helmet>
        <title>Reset Password / Mini Urls</title>
      </Helmet>
      <Topbar value="Login" link="/"></Topbar>
      <div className="container">
        <header></header>
        <div className="row">
          <div className="col-lg-12 form__vessel">
            <form className="row g-3 p-4 mx-auto" style={{ width: "20rem" }}>
              <h1 className="h2 p-2">Reset Password</h1>
              <div className="mb-3 col-md-12">
                <label htmlFor="inputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-3 col-md-12">
                <button type="submit" className="button btn btn-primary w-100">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
}

export default ResetPass;
