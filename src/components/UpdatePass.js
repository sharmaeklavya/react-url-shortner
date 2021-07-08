import Topbar from "./sub-components/Topbar";
import Bottombar from "./sub-components/Bottombar";
import { Helmet } from "react-helmet-async";

function UpdatePass() {
  return (
    <>
      <Helmet>
        <title>Update Password / Mini Urls</title>
      </Helmet>
      <Topbar value="Login" link="/login"></Topbar>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 form-container">
            <form className="row g-3 p-4 mx-auto" style={{ width: "20rem" }}>
              <h1 className="h2 p-2">Update Password</h1>

              <div className="mb-3 col-md-12">
                <label htmlFor="inputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword1"
                  required
                />
              </div>
              <div className="mb-3 col-md-12">
                <label htmlFor="inputPassword2" className="form-label">
                  Repeat Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  required
                />
              </div>
              <div className="mb-3 col-md-12">
                <button type="submit" className="button btn btn-primary w-100">
                  Submit
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

export default UpdatePass;
