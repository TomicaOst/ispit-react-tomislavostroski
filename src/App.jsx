import React, { useState } from "react";
import "./App.css";
import { InputForm, OutputForm } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userData, setUserData] = useState(null);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userName = event.target.user.value;

    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => {
        fetch(`https://api.github.com/users/${userName}/repos`)
          .then((response) => response.json())
          .then((repository) => {
            setUserData({
              profilePicture: data.avatar_url,
              name: data.name,
              location: data.location,
              bio: data.bio,
              repos: repository.map((repo) => ({
                name: repo.name,
              })),
            });
          });
      });
  };

  return (
    <div>
      {userData === null ? (
        <InputForm handleOnSubmit={handleOnSubmit} />
      ) : (
        <OutputForm userData={userData} setUserData={setUserData} />
      )}
    </div>
  );
}

export default App;
