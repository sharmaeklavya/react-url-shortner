// import { useContext } from "react";
// import UserContext from "../Usercontext";

function Profile() {
  // const { username, setUsername } = useContext(UserContext);
  return (
    <>
      <div className="row">
        <h1 className="text-white head">Hello, </h1>
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
              <p className="card-text">Total Generated Links: 157</p>
              <button type="button" className="btn btn-primary">
                Check here
              </button>
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
              <h5 className="card-title">Monthly Count</h5>
              <p className="card-text">Total Generated Links : 1027</p>
              <button type="button" className="btn btn-primary">
                Check here
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
