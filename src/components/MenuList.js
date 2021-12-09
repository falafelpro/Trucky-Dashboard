import React from "react";
import MenuItem from "./MenuItem";
import menuStore from "../stores/menuStore";
function MenuList() {
  const foundMenuList = menuStore.menus.map((menu) => {
    // REVIEW: Remove the {}, they will not return the MenuItem
    <MenuItem menu={menu} />;
  });

  return (
    // REVIEW: Remove fragment
    <>
      <div className="col-md-4 order-md-2 mb-4">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your Dishes</span>
          <span className="badge badge-secondary badge-pill">3</span>
        </h4>
        <ul className="list-group mb-3">{foundMenuList}</ul>

        <div className="card p-2">
          <div className="input-group">
            <label>Hi:</label>
            <div className="input-group-append">
              <button type="button" className="btn warning-button">
                Add a Dish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuList;
