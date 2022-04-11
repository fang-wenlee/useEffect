import React, { useEffect, useState } from "react";

const Login = ({ name }) => {
  const [userName, setUserName] = useState("fang");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = `Welcome ${userName}`;
    console.log(`Celebrate ${userName}`);
  }, [userName]);

  useEffect(() => {
    console.log(`The use is: ${admin ? "admin" : "not admin"}`);
  }, [admin]);

  return (
    <div>
      <p> Welecom {userName}! </p>
      <button onClick={() => setUserName(name)}>Change Name</button>
      <p>{admin ? "Logged in" : "not logged in "}</p>
      <button onClick={() => setAdmin(!admin)}> Log in</button>
    </div>
  );
};

export default Login;
