import { useState } from "react";
import { useHistory } from "react-router";
import { Helmet } from "react-helmet-async";
import Topbar from "./sub-components/Topbar";
import Bottombar from "./sub-components/Bottombar";

function Signup() {
  const history = useHistory();
  const alert = document.getElementById("alert");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const connect = await fetch("https://node-mini-urls.herokuapp.com", {
        method: "POST",
        body: JSON.stringify({ fullName, email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const res = await connect.json();
      handleErrors(res, connect);
    } else {
      handleAlerts("alert-warning");
      alert.innerText = "Password does not match";
    }
    e.target.reset();
  };

  const handleErrors = (res, connect) => {
    if (connect.status === 500) {
      const { fullName, email, password } = res;
      handleAlerts("alert-danger");
      alert.innerText = `${fullName} ${email} ${password}`;
    } else if (connect.status === 200) {
      handleAlerts("alert-success");
      alert.innerText = "User registration successful";
      setTimeout(() => {
        history.push("/login");
      }, 500);
    }
  };

  const handleAlerts = (action) => {
    alert.className = "";
    alert.classList.add("alert", action);
  };

  return (
    <>
      <Helmet>
        <title>Sign up / Mini Urls</title>
      </Helmet>
      <Topbar value="Login" link="/login"></Topbar>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 form-container">
            <div className="bulb-img">
              <img src="/imgs/light-bulb.jpg" alt="light-bulb" />
            </div>
          </div>
          <div className="col-lg-6 form-container">
            <form
              className="row g-3 mx-auto p-4"
              style={{ maxWidth: "24rem" }}
              onSubmit={handleSubmit}
            >
              <h1 className="h2 p-2">Sign up</h1>
              {/* Alerts */}
              <div id="alert" className="hidden" role="alert"></div>
              <div className="mb-3 col-md-6">
                <label htmlFor="inputFulltName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFullName"
                  aria-describedby="fullName"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="inputEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="inputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                  minLength="6"
                  required
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="inputPassword2" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  minLength="6"
                  required
                />
              </div>
              <div id="emailHelp" className="form-text">
                We'll never share your information with anyone else.
              </div>
              <div className="mb-3 col-md-6 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                  required
                />
                <label className="form-check-label" htmlFor="check">
                  I agree to the T&C
                </label>
              </div>
              <div className="mb-3 col-md-6">
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

export default Signup;
