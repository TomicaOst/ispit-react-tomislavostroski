import React from "react";
import { Card, Button } from "react-bootstrap";

const OutputForm = ({ userData, setUserData }) => {
  return (
    <div className="container mt-2r">
      <div className="container-logo-name">
        <img
          src={userData.profilePicture}
          alt="profile"
          width="220"
          height="220"
        ></img>
        <h1>{userData.name}</h1>
      </div>
      <div className="container-items mt-1p5r">
        <div>
          <b>BIO:</b>
          {userData.bio}
        </div>
        <div>
          <b>LOCATION:</b> {userData.location}
        </div>
        <div className="item-width">
          <b>REPOSITORIES:</b>
          <div className="mt-1p5r">
            {userData.repos.map((repo) => (
              <Card>
                <Card.Body action variant="light">
                  <span>{repo.name}</span>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="container-items mt-2r">
        <Button
          variant="secondary"
          size="lg"
          className="item-width"
          onClick={() => setUserData(null)}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default OutputForm;
