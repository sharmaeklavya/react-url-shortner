import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Cookies from "js-cookie";
import Topbar from "./sub-components/Topbar";
import Bottombar from "./sub-components/Bottombar";

function Login() {
  const alert = document.getElementById("alert");
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const connect = await fetch("https://node-mini-urls.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const res = await connect.json();
    alert.classList.remove("hidden");
    if (res.message === "Login Success") {
      alert.innerText = `Please wait...`;
      Cookies.set("LJTSK", res.token, {
        expires: 7,
        secure: true,
        sameSite: "Lax",
      });
      history.push("/dashboard");
    } else {
      alert.innerText = res.message;
    }
  };

  return (
    <>
      <Helmet>
        <title>Login / Mini Urls</title>
      </Helmet>
      <Topbar value="Sign up" link="/"></Topbar>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 form-container">
            <form
              className="row g-3 p-4 mx-auto"
              style={{ maxWidth: "20rem" }}
              onSubmit={handleSubmit}
            >
              <h1 className="h2 p-2">Login</h1>
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
  );
}

export default Login;
