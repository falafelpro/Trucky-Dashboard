import { Dropdown } from "bootstrap";
import React, { useState } from "react";
import { MenuTypesList } from "../components/menuData";
import MenuList from "../components/MenuList";
import menuStore from "../stores/menuStore";

function Menu() {
  const [descriptionWordCount, setDescriptionWordCount] = useState(0);
  const [selectedDish, setselectedDish] = useState(null);
  const dishes = [
    {
      name: "Falafel",
      slug: "falafel",
      image:
        "https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-1.jpg",
      type: "side",
      description: "Middle eastern cooked food",
      price: 300,
    },
    {
      name: "Pie",
      slug: "pie",
      image: "https://en.wikipedia.org/wiki/File:Tarte_aux_poires_2a.jpg",
      type: "desert",
      description: "American cooked food",
      price: 3,
    },
  ];

  console.log(dishes);
  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Menu form</h2>
      </div>

      <div className="row">
        <MenuList dishes={dishes} setselectedDish={setselectedDish} />
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Dish Detail</h4>
          <form className="needs-validation">
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
                <label for="dish-type-select">Select type</label>

                <select
                  class="form-select form-select"
                  aria-label=".form-select-sm example"
                  name="dish-type-select"
                  value={selectedDish ? selectedDish.type : null}
                >
                  <option value={0}>Select a type</option>
                  {MenuTypesList?.map((type) => {
                    return <option value={type.slugedName}>{type.name}</option>;
                  })}
                </select>
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

            <hr className="mb-4" />
            <button className="btn regular-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Menu;
