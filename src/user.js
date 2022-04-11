import React, { useState, useEffect } from "react";

const User = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>User List </h1>
      <ul style={{ listStyle: "none" }}>
        {data && data.map((user) => <li key={user.id}> {user.login}</li>)}
      </ul>
    </div>
  );
};

export default User;
