import { observer } from "mobx-react";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import truckStore from "../stores/truckStore";

function TruckProfileCard() {
  const [isTruckUpdateRequested, setIsTruckUpdateRequested] = useState(false);
  const [truck, setTruck] = useState({
    name: "",
    image: "",
    slug: "",
    specialty: "",
    owner: null,
    dishes: [],
    location: null,
  });
  const handleUserDetailsChange = (event) => {
    setTruck({ ...truck, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    console.log(truck);
    truckStore.updateTruck(truck);
    setIsTruckUpdateRequested(false);
  };
  return (
    <div className="mt-5 col-10">
      <div>
        <Card>
          <Card.Header>
            <h5>Truck Details</h5>
          </Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <div>
                    <label className="form-label">Name</label>
                    <input
                      name="Name"
                      required=""
                      placeholder="Enter your truck's name"
                      type="text"
                      className="form-control"
                      defaultValue={truck?.name}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
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
                      disabled={!isTruckUpdateRequested}
                    />
                  </div>
                </div>
              </div>
            </form>
          </Card.Body>
          <Card.Footer>
            {isTruckUpdateRequested ? (
              <Button
                className="warning-button"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : (
              <Button
                className="regular-button"
                type="button"
                onClick={() => setIsTruckUpdateRequested(true)}
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

export default observer(TruckProfileCard);
