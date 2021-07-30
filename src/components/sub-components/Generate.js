import React, { useState } from "react";
import Axios from "axios";

function Generate() {
  const [longurl, setLongurl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://node-mini.herokuapp.com/shorten", {
      longurl,
    })
      .then((res) => {
        handleErrors(res);
      })
      .catch((err) => handleErrors(err.response));
  };

  const handleErrors = (res) => {
    const alert = document.getElementById("ntfy");
    alert.classList.remove("hidden");
    // Condition depending on response
    if (res.status === 200) {
      alert.innerHTML = `${res.data.message}
      <p id="alert" class="alert-success">Check the created url in recent tab </p>`;
    } else {
      alert.innerText = res.data.message;
    }
  };

  return (
    <>
      <div className="row">
        <h1 className="text-white head">Tiny-tiny Urls </h1>
        <div className="col-lg-12">
          <div className="url__form my-3 mx-auto p-4">
            <div id="ntfy" className="lead pb-4 text-center"></div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="inputURL" className="form-label">
                  <i className="fas fa-link"></i>
                  <span className="ms-3">Paste your url here</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputURL"
                  onChange={(e) => setLongurl(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Make it tini-tiny
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Generate;
