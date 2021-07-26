import React, { useState, useEffect, useContext } from "react";
import UserContext from "../Usercontext";
import Axios from "axios";

function Profile() {
  const { username } = useContext(UserContext);
  const [dailyCount, setDailyCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    Axios.get("https://node-mini.herokuapp.com/fetch")
      .then((res) => handleTotalUrls(res.data))
      .catch((err) => console.log(err.response));
  }, []);

  const handleTotalUrls = (res) => {
    const today = res.filter(
      (url) => new Date(url.dateCreated).getDate() === new Date().getDate()
    );
    const total = res.map((url) => new Date(url.dateCreated));
    setDailyCount(today.length);
    setTotalCount(total.length);
  };

  return (
    <>
      <div className="row">
        <h1 className="text-white head">
          Hello, {username.fullName.toUpperCase()}
        </h1>
        <div className="col-lg-6">
          <div className="card card__ my-3 ms-auto" style={{ width: "18rem" }}>
            <img
              src="/imgs/count.jpg"
              className="card-img-top"
              alt="daily-count"
              style={{ height: "12rem", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Daily Count</h5>
              <p className="card-text">Total Generated Links: {dailyCount}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card card__ my-3 me-auto" style={{ width: "18rem" }}>
            <img
              src="/imgs/count.jpg"
              className="card-img-top"
              alt="monthly-count"
              style={{ height: "12rem", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Total Count</h5>
              <p className="card-text">Total Generated Links : {totalCount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
