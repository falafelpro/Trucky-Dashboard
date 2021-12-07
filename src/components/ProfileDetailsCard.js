import { observer } from "mobx-react";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import authStore from "../stores/authStore";

function ProfileDetailsCard() {
  const [isProfileUpdateRequested, setisProfileUpdateRequested] =
    useState(false);
  const [user, setUser] = useState({
    phoneNumber: "",
    email: "",
  });
  console.log(user);
  const handleUserDetailsChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    console.log(user);
    authStore.updateUserDetail(user);
    setisProfileUpdateRequested(false);
  };
  return (
    <div className="mt-5 col-10">
      <div>
        <Card>
          <Card.Header>
            <h5>User Details</h5>
          </Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit}>
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
                      defaultValue={user?.username}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <div>
                    <label className="form-label">Phone</label>
                    <input
                      name="phoneNumber"
                      required=""
                      placeholder="Enter a valid phone number"
                      type="text"
                      className="form-control"
                      onChange={handleUserDetailsChange}
                      defaultValue={user.phoneNumber}
                      disabled={!isProfileUpdateRequested}
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
                      onChange={handleUserDetailsChange}
                      defaultValue={user.email}
                      disabled={!isProfileUpdateRequested}
                    />
                  </div>
                </div>
              </div>
            </form>
          </Card.Body>
          <Card.Footer>
            {isProfileUpdateRequested ? (
              <Button type="button" onClick={handleSubmit}>
                Submit
              </Button>
            ) : (
              <Button
                type="button"
                onClick={() => setisProfileUpdateRequested(true)}
              >
                Update
              </Button>
            )}
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default observer(ProfileDetailsCard);
