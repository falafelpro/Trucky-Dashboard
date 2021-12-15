import { observer } from "mobx-react";
import React, { useState } from "react";
import MenuList from "../components/MenuList";
import menuStore from "../stores/menuStore";
import truckStore from "../stores/truckStore";
import authStore from "../stores/authStore";
import MenuDetails from "../components/MenuDetails";

function Menu() {
  const [selectedDish, setselectedDish] = useState(null);
  const [isMenuUpdateRequested, setIsMenuUpdateRequested] = useState(false);

  const truck = truckStore.trucks.find(
    (truck) => truck.owner === authStore.user._id
  );
  const foundDishes = menuStore.dishes.filter(
    (dish) => dish.truck === truck._id
  );

  return (
    <div className="container">
      <div className="py-3 text-center">
        <h2>Menu form</h2>
      </div>
      <div className="row">
        <MenuList
          isMenuUpdateRequested={isMenuUpdateRequested}
          setselectedDish={setselectedDish}
          dishes={foundDishes}
        />

        <div>
          <MenuDetails
            selectedDish={selectedDish}
            isMenuUpdateRequested={isMenuUpdateRequested}
            setIsMenuUpdateRequested={setIsMenuUpdateRequested}
          />
        </div>
      </div>
    </div>
  );
}

export default observer(Menu);
