import React, { useEffect, useState } from "react";

export default function NewUserInfo() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(1);
  const userChange = (event) => {
    setUserId(event.target.value);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/"+userId)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUser(json);
      });
    return () => {
      console.log("cleanup");
    };
  }, [userId]);

  return (
    <div>
      user info: <br />
      <input type="text" value={userId} onChange={userChange} />
      Name: {user.name}
      <br />
      Email: {user.email}
    </div>
  );
}
