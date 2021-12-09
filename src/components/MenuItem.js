import React from "react";

function MenuItem({ setselectedDish, dish }) {
  return (
    <li
      className="
                list-group-item
                d-flex
                justify-content-between
                lh-condensed
              "
      onClick={() => setselectedDish(dish)}
    >
      <div>
        <h6 className="my-0">{dish.name}</h6>
        <small className="text-muted">{dish.type}</small>
      </div>
      <span className="text-muted">{dish.price} KD</span>
    </li>
  );
}

export default MenuItem;
