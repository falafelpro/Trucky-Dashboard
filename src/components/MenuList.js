import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import menuStore from "../stores/menuStore";
import MenuCreateModal from "./MenuCreateModal";
import { observer } from "mobx-react";
import truckStore from "../stores/truckStore";
import authStore from "../stores/authStore";
function MenuList({ setselectedDish, isMenuUpdateRequested }) {
  //modal stuff
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  useEffect(() => {
    // Run! Like go get some data from an API.
    const truck = truckStore.checkForTruck();
    console.log(truck);
    menuStore.fetchTruckDishes(truck._id);
  }, []);
  const foundDishList = menuStore.dishes.map((dish) => (
    <MenuItem
      isMenuUpdateRequested={isMenuUpdateRequested}
      dish={dish}
      setselectedDish={setselectedDish}
      key={dish._id}
    />
  ));

  return (
    <div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your Dishes</span>
        <span class="badge bg-secondary">{menuStore.dishes.length}</span>
      </h4>
      <ul className="list-group mb-3">{foundDishList}</ul>

      <button type="button" onClick={openModal} className="btn warning-button">
        Add a Dish
      </button>
      <MenuCreateModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default observer(MenuList);
