import React from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

const OutputForm = ({ userData, setUserData }) => {
  return (
    <div className="container mt">
      <div className="logoName">
        <img
          src={userData.profilePicture}
          alt="profile"
          width="200"
          height="200"
        ></img>
        <h1 className="mt-log">{userData.name}</h1>
      </div>
      <div className="div-start">BIO: {userData.bio}</div>
      <div className="div-start">LOCATION: {userData.location}</div>

      {userData.repos.map((repo) => (
        <ListGroup>
          <ListGroupItem action variant="light" className="item-container">
            <span>{repo.name}</span>
          </ListGroupItem>
        </ListGroup>
      ))}

      <Button variant="secondary" size="lg" onClick={() => setUserData(null)}>
        Reset
      </Button>
    </div>
  );
};

export default OutputForm;
