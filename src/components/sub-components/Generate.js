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
    const shortUrl = document.getElementById("short__url");
    const alert = document.getElementById("ntfy");

    // Condition depending on response
    if (res.status === 200) {
      shortUrl.classList.remove("hidden");
      alert.innerText = res.data.message;
    } else {
      alert.classList.remove("hidden");
      shortUrl.classList.add("hidden");
      alert.innerText = res.data.message;
    }
  };

  return (
    <>
      <div className="row">
        <h1 className="text-white head">Tiny-tiny Urls </h1>
        <div className="col-lg-12">
          <div className="url__form mx-auto p-4">
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
            <div id="short__url" className="my-3 hidden">
              <label htmlFor="outputURL" className="form-label">
                <i className="fas fa-magic"></i>
                <span className="ms-3">Copy your mini url here</span>
              </label>
              <a
                href={longurl}
                className="form-control"
                id="outputURL"
                target="_blank"
                rel="noreferrer"
              >
                {longurl}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Generate;
