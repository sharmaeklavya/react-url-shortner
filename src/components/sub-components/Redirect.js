import { useEffect } from "react";
import Axios from "axios";

function Redirect() {
  useEffect(() => {
    const code = window.location.pathname;
    Axios.get(`https://node-mini.herokuapp.com${code}`)
      .then((res) => redirect(res.data[0].shorturl))
      .catch((err) => console.log(err.response));

    const redirect = (url) => {
      window.location.href = url;
    };
    return () => console.log("successful");
  }, []);

  return null;
}

export default Redirect;
