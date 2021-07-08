import React, { useState } from "react";

const UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
