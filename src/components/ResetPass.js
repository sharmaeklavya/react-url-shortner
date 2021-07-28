import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router";
import { Helmet } from "react-helmet-async";
import Topbar from "./sub-components/Topbar";
import Bottombar from "./sub-components/Bottombar";

function ResetPass() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const alert = document.getElementById("alert");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert.classList.remove("hidden");
    Axios.post("https://node-mini.herokuapp.com/reset", {
      email,
    })
      .then((res) => handleErrors(res))
      .catch((err) => handleErrors(err.response));
  };

  const handleErrors = (res) => {
    if (res.status === 200) {
      alert.innerText = "Please check your email to verify";
      history.push("/");
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
              <h1 className="h2 p-2">Reset Password</h1>
              <div
                id="alert"
                className="alert alert-warning hidden"
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
            </form>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
}

export default ResetPass;
