import { useState } from "react";
import Axios from "axios";
import { Helmet } from "react-helmet-async";
import Topbar from "./sub-components/Topbar";
import Bottombar from "./sub-components/Bottombar";

function ResetPass() {
  const [email, setEmail] = useState("");
  const alert = document.getElementById("alert");

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://node-mini.herokuapp.com/reset", {
      email,
    })
      .then((res) => handleErrors(res))
      .catch((err) => handleErrors(err.response));
  };

  const handleErrors = (res) => {
    alert.classList.remove("hidden");
    if (res.status === 200) {
      alert.innerText =
        "We have sent you an email. Please check and confirm your identity.";
    } else {
      alert.innerText = res.data.message;
    }
  };

  return (
    <>
      <Helmet>
        <title>Reset Password / Mini Urls</title>
      </Helmet>
      <Topbar value="Login" link="/"></Topbar>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 form__vessel">
            <form
              className="row g-3 p-4 mx-auto"
              style={{ width: "20rem" }}
              onSubmit={handleSubmit}
            >
              <h1 className="lead p-2">Reset Password</h1>
              <div
                id="alert"
                className="alert alert-info hidden"
                role="alert"
              ></div>
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 col-md-12">
                <button type="submit" className="button btn btn-primary w-100">
                  Reset
                </button>
              </div>
              <div id="ntfy" className="h6 alert alert-info hidden"></div>
            </form>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
}

export default ResetPass;
