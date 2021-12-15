import { observer } from "mobx-react";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import truckStore from "../stores/truckStore";
import Map from "./Map";
import { SpecialtyList } from "../components/selectListData";

function TruckProfileCard({ oldtruck }) {
  const [isTruckUpdateRequested, setIsTruckUpdateRequested] = useState(false);
  const [truck, setTruck] = useState({
    name: oldtruck.name,
    image: oldtruck.image,
    specialty: oldtruck.specialty,
    location: null,
  });
  const [selectedLocationFromMap, setselectedLocationFromMap] = useState(null);
  console.log(truck);
  const handleSubmit = (event) => {
    event.preventDefault();
    //setTruck({ ...truck, location: selectedLocationFromMap });
    truckStore.updateTruck(truck, oldtruck._id);
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
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      name="name"
                      required=""
                      placeholder="Enter your truck's name"
                      type="text"
                      className="form-control"
                      value={truck?.name}
                      onChange={(event) =>
                        setTruck({ ...truck, name: event.target.value })
                      }
                      disabled={!isTruckUpdateRequested}
                    />
                  </div>
                  <label>Specialty</label>
                  {isTruckUpdateRequested ? (
                    <select
                      class="form-select form-select"
                      aria-label=".form-select-sm example"
                      name="specialty"
                      value={truck.specialty}
                      onChange={(event) =>
                        setTruck({ ...truck, specialty: event.target.value })
                      }
                    >
                      <option value={0}>Select a category</option>
                      {SpecialtyList?.map((category) => {
                        return (
                          <option
                            key={category.slugedName}
                            value={category.name}
                          >
                            {category.name}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      value={truck.specialty}
                      disabled={true}
                    />
                  )}
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Location</label>

                  <Map
                    isTruckUpdateRequested={isTruckUpdateRequested}
                    setselectedLocationFromMap={setselectedLocationFromMap}
                    selectedLocationFromMap={selectedLocationFromMap}
                    setTruck={setTruck}
                    truck={truck}
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6"></div>
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
