import React, { useEffect } from "react";
import Axios from "axios";

function Redirect() {
  useEffect(() => {
    const redirect = window.location.pathname;
    Axios.get(`https://node-mini.herokuapp.com${redirect}`)
      .then((res) => (window.location.href = res.data[0].shorturl))
      .catch((err) => console.log(err.response));
  }, []);

  return <> </>;
}

export default Redirect;