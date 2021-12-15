import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import menuStore from "../stores/menuStore";
import { MenuTypesList } from "../components/selectListData";

function MenuDetails({
  setIsMenuUpdateRequested,
  isMenuUpdateRequested,
  selectedDish,
}) {
  const [descriptionWordCount, setDescriptionWordCount] = useState(0);
  const [selectedType, setSelectedType] = useState("");
  const [menu, setMenu] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    menuStore.updateDish(menu, menu._id);
    setIsMenuUpdateRequested(false);
  };
  useEffect(() => {
    setMenu(selectedDish);
  }, [selectedDish]);
  console.log(menu);

  const handleChange = (e) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
    if (e.target.name === "description")
      setDescriptionWordCount(e.target.value.length);
    if (e.target.name === "type") setSelectedType(e.target.value);
    console.log(menu);
  };
  const handleImage = (event) =>
    setMenu({ ...menu, image: event.target.files[0] });
  return (
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Dish Detail</h4>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-center">Image</h5>
          <div className="menu-image d-flex justify-content-center">
            <img
              src={menu?.image}
              alt={menu?.name}
              style={{ width: 300, height: 200 }}
            />
          </div>
          {isMenuUpdateRequested ? (
            <div className="menu-image-upload">
              <input type="file" name="image" onChange={handleImage} />
            </div>
          ) : null}
        </div>
      </div>
      <form className="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder=""
              onChange={handleChange}
              defaultValue={menu?.name}
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
                value={menu?.type}
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
              value={menu?.description}
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
            value={menu?.price}
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
  );
}

export default observer(MenuDetails);
