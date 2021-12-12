import { observer } from "mobx-react";
import React from "react";
import menuStore from "../stores/menuStore";

function MenuItem({ setselectedDish, dish, isMenuUpdateRequested }) {
  const handleDishClick = () =>
    isMenuUpdateRequested ? null : setselectedDish(dish);

  const handleDelete = (event) => {
    if (!window.confirm("Are you sure in deleting this dish?")) {
      event.preventDefault();
    } else {
      console.log(dish._id);
      menuStore.deleteDish(dish._id);
    }
  };
  return (
    <>
      <li
        className="
                list-group-item
                d-flex
                justify-content-between
                lh-condensed
              "
        onClick={handleDishClick}
      >
        <div>
          <h6 className="my-0">{dish.name}</h6>
          <small className="text-muted">{dish.type}</small>
        </div>
        <span className="text-muted">{dish.price} KD</span>
        <button
          type="button"
          class="btn btn-danger btn-sm"
          onClick={handleDelete}
        >
          X
        </button>
      </li>
    </>
  );
}

export default observer(MenuItem);
