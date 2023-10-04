import React from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

const OutputForm = ({ userData, setUserData }) => {
  return (
    <div>
      <div>
        <img
          src={userData.profilePicture}
          alt="profile"
          width="200"
          height="200"
        ></img>
        <h1>{userData.name}</h1>
      </div>
      <div>BIO: {userData.bio}</div>
      <div>LOCATION: {userData.location}</div>

      {userData.repos.map((repo) => (
        <ListGroup>
          <ListGroupItem action variant="light">
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
