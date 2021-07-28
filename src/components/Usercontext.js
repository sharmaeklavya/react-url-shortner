import React, { useState } from "react";

const UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState("");
  const [isLoggedin, setLoggedin] = useState(false);

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        verifiedEmail,
        setVerifiedEmail,
        isLoggedin,
        setLoggedin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
