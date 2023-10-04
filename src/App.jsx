import React, { useState } from "react";
import "./App.css";
import { InputForm, OutputForm } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userData, setUserData] = useState(null);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userName = event.target.user.value;

    Promise.all([
      fetch(`https://api.github.com/users/${userName}`),
      fetch(`https://api.github.com/users/${userName}/repos`),
    ])
      .then(([fetchUser, fetchRepo]) => {
        return Promise.all([fetchUser.json(), fetchRepo.json()]);
      })
      .then((dataJSON) => {
        setUserData({
          profilePicture: dataJSON[0].avatar_url,
          name: dataJSON[0].name,
          location: dataJSON[0].location,
          bio: dataJSON[0].bio,
          repos: dataJSON[1].map((repo) => ({ name: repo.name })),
        });
      })
      .catch(() => {
        return alert("Enter correct username");
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
