import { observer } from "mobx-react";
import React, { useState } from "react";
import { MenuTypesList } from "../components/menuData";
import MenuList from "../components/MenuList";

function Menu() {
  const [descriptionWordCount, setDescriptionWordCount] = useState(0);
  const [selectedDish, setselectedDish] = useState(null);
  const [isMenuUpdateRequested, setIsMenuUpdateRequested] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const handleSubmit = (e) => {
    setIsMenuUpdateRequested(false);
  };
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
                  defaultValue={selectedDish?.name}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Type</label>
                {isMenuUpdateRequested ? (
                  <select
                    class="form-select form-select"
                    aria-label=".form-select-sm example"
                    name="dish-type-select"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value={0}>Select a type</option>
                    {MenuTypesList?.map((type) => {
                      return (
                        <option value={type.slugedName}>{type.name}</option>
                      );
                    })}
                  </select>
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder=""
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
                  rows="10"
                  defaultValue={selectedDish?.description}
                  onChange={(e) =>
                    setDescriptionWordCount(e.target.value.length)
                  }
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
