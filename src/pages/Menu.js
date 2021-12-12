import { observer } from "mobx-react";
import React, { useState } from "react";
import { MenuTypesList } from "../components/menuData";
import MenuList from "../components/MenuList";
import menuStore from "../stores/menuStore";

function Menu() {
  const [descriptionWordCount, setDescriptionWordCount] = useState(0);
  const [selectedDish, setselectedDish] = useState(null);
  const [isMenuUpdateRequested, setIsMenuUpdateRequested] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedDish);
    menuStore.updateDish(selectedDish, selectedDish._id);
    setIsMenuUpdateRequested(false);
  };

  const handleChange = (e) => {
    setselectedDish({ ...selectedDish, [e.target.name]: e.target.value });
    if (e.target.name === "description")
      setDescriptionWordCount(e.target.value.length);
    if (e.target.name === "type") setSelectedType(e.target.value);
    console.log(selectedDish);
  };
  const handleImage = (event) =>
    setselectedDish({ ...selectedDish, image: event.target.files[0] });

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Menu form</h2>
      </div>

      <div className="row">
        <MenuList
          isMenuUpdateRequested={isMenuUpdateRequested}
          setselectedDish={setselectedDish}
        />
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Dish Detail</h4>
          <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder=""
                  onChange={handleChange}
                  defaultValue={selectedDish?.name}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Type</label>
                {isMenuUpdateRequested ? (
                  <select
                    class="form-select form-select"
                    aria-label=".form-select-sm example"
                    name="type"
                    value={selectedType}
                    onChange={handleChange}
                  >
                    <option value={0}>Select a type</option>
                    {MenuTypesList?.map((type) => {
                      return (
                        <option key={type.name} value={type.slugedName}>
                          {type.name}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    name="type1"
                    placeholder=""
                    onChange={handleChange}
                    value={selectedDish?.type}
                  />
                )}
              </div>
            </div>

            <div className="mb-3">
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Descripe your meal here"
                  name="description"
                  maxlength="200"
                  rows="3"
                  defaultValue={selectedDish?.description}
                  onChange={handleChange}
                ></textarea>
                <label for="description">Description</label>
                <p>{descriptionWordCount}/200</p>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <label for="price">Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                onChange={handleChange}
                defaultValue={selectedDish?.price}
              />
            </div>
            {isMenuUpdateRequested ? (
              <button className="warning-button" type="submit">
                Submit
              </button>
            ) : null}
          </form>
          {isMenuUpdateRequested ? null : (
            <button
              className="regular-button"
              type="button"
              onClick={() => setIsMenuUpdateRequested(true)}
            >
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default observer(Menu);
