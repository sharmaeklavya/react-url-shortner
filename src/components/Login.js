import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Axios from "axios";
import Topbar from "./sub-components/Topbar";
import Bottombar from "./sub-components/Bottombar";
import UserContext from "./Usercontext";

function Login() {
  const history = useHistory();
  const alert = document.getElementById("alert");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [waiting, setWaiting] = useState(-1);
  const { setUsername, setLoggedin } = useContext(UserContext);

  Axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("https://node-mini.herokuapp.com", {
        email,
        password,
      });
      handleErrors(response);
      setUsername(response.data.user);
    } catch (error) {
      handleErrors(error.response.data);
    }
  };

  const handleErrors = (res) => {
    alert.classList.remove("hidden");
    if (res.status === 200) {
      alert.innerText = `Please wait...`;
      history.push("/dashboard");
    } else {
      alert.innerText = res.message;
    }
  };

  useEffect(() => {
    Axios.get("https://node-mini.herokuapp.com/auth")
      .then((res) => {
        if (res.data.loggedin === true) {
          setLoggedin(res.data.loggedin);
          setUsername(res.data.user);
          setWaiting(1);
          history.push("/dashboard");
        } else {
          setWaiting(0);
        }
      })
      .catch((err) => console.log(err.response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {waiting === -1 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <figure className="loading__img mx-auto">
                <img src="/imgs/loading.svg" alt="data being processed" />
              </figure>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Helmet>
            <title>Login / Mini Urls</title>
          </Helmet>
          <Topbar value="Sign up" link="/register"></Topbar>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 form__vessel">
                <form
                  className="row g-3 p-4 mx-auto"
                  style={{ maxWidth: "20rem" }}
                  onSubmit={handleSubmit}
                >
                  <h1 className="lead p-2">Login</h1>
                  <div
                    id="alert"
                    className="alert alert-warning hidden"
                    role="alert"
                  ></div>
                  <div className="mb-3 col-md-12">
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
                      required
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label htmlFor="inputPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <button type="submit" className="button btn btn-primary">
                        Sign in
                      </button>
                      <Link className="link" to="/reset-password">
                        Forgot Password
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Bottombar />
        </>
      )}
    </>
  );
}

export default Login;
