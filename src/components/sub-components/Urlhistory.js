import Axios from "axios";
import { useState, useEffect } from "react";

function Urlhistory() {
  const [fetchUrl, setFetchUrl] = useState([]);

  useEffect(() => {
    Axios.get("https://node-mini.herokuapp.com/fetch")
      .then((res) => setFetchUrl(res.data))
      .catch((err) => console.log(err.response));
  }, []);

  const formatDates = (param) => {
    const date = new Date(param);
    return date.toLocaleDateString();
  };

  const addNewlines = (str) => {
    var result = "";
    while (str.length > 0) {
      result += str.substring(0, 20) + "\n";
      str = str.substring(20);
    }
    return result;
  };

  return (
    <div className="row">
      <h1 className="text-white head">Recent URLs </h1>
      <div className="col-lg-12">
        {fetchUrl.length > 0 ? (
          <table className="url-table table caption-top mx-auto">
            <caption className="lead">List of URLs</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Long Urls</th>
                <th scope="col">Mini Urls</th>
                <th scope="col">Date Created</th>
              </tr>
            </thead>
            <tbody>
              {fetchUrl.map((fetch, index) => (
                <tr key={fetch._id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={fetch.longurl} target="_blank" rel="noreferrer">
                      {addNewlines(fetch.longurl)}
                    </a>
                  </td>
                  <td>
                    <a href={fetch.shorturl} target="_blank" rel="noreferrer">
                      {fetch.shorturl.substr(32)}
                    </a>
                  </td>
                  <td>{formatDates(fetch.dateCreated)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <figure className="loading-img mx-auto">
            <img src="/imgs/loading_url.svg" alt="data being processed" />
          </figure>
        )}
      </div>
    </div>
  );
}

export default Urlhistory;
