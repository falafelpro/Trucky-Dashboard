import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import authStore from "../stores/authStore";

function ProfileDetailsCard() {
  const [isProfileUpdateRequested, setisProfileUpdateRequested] =
    useState(false);
  const [user, setUser] = useState({
    username: authStore.user?.username,
    password: authStore.user?.password,
  });
  console.log(user);
  const handleUserDetailsChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    authStore.updateCredentials(user);
    console.log(user);
  };
  return (
    <div>
      <Card>
        <Card.Header>
          <div className="row">
            <div className="col-2">
              <h5>User Details</h5>
            </div>
            <div className="col-8"></div>
            <div className="col-1">
              <Button onClick={() => setisProfileUpdateRequested(true)}>
                Update
              </Button>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="mb-3 col-md-6">
              <div>
                <label className="form-label">User Name</label>
                <input
                  name="username"
                  required=""
                  placeholder="Enter your username"
                  type="text"
                  className="form-control"
                  onChange={handleUserDetailsChange}
                  defaultValue={user.username}
                />
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <div>
                <label className="form-label">Password</label>
                <input
                  name="password"
                  required=""
                  type="password"
                  className="form-control"
                  defaultValue={user.password}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-md-6">
              <div>
                <label className="form-label">Phone</label>
                <input
                  name="phone"
                  required=""
                  placeholder="Enter a valid phone number"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <div>
                <label className="form-label">Email</label>
                <input
                  name="email"
                  required=""
                  placeholder="Enter your email"
                  type="email"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfileDetailsCard;
