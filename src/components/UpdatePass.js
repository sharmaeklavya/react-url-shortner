import React, { useState } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import Topbar from "./sub-components/Topbar";
import Bottombar from "./sub-components/Bottombar";

function UpdatePass() {
  const param = useParams();
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      Axios.post(`https://node-mini.herokuapp.com/update/${param.rstring}`, {
        password: password,
      })
        .then((res) => handleErrors(res))
        .catch((err) => handleErrors(err.response));
    } else {
      alert.innerText = "Password does not match";
    }
  };

  const handleErrors = (res) => {
    const alert = document.getElementById("alert").classList.remove("hidden");
    if (res.status === 200) {
      alert.innerText = "New password updated";
      setTimeout(() => {
        history.pushState("/");
      }, 2000);
    } else {
      alert.innerText = res.data.message;
    }
  };

  return (
    <>
      <Helmet>
        <title>Update Password / Mini Urls</title>
      </Helmet>
      <Topbar value="Login" link="/"></Topbar>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 form__vessel">
            <form
              className="row g-3 p-4 mx-auto"
              style={{ width: "20rem" }}
              onClick={handleSubmit}
            >
              <h1 className="lead p-2">Update Password</h1>
              <div
                id="alert"
                className="alert alert-warning hidden"
                role="alert"
              ></div>
              <div className="mb-3 col-md-12">
                <label htmlFor="inputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword1"
                  required
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
