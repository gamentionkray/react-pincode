import React from "react";

const Card = ({ name, block, district, state, pincode }) => {
  return (
    <div className="card">
      <h1 className="card-header">{name}</h1>
      <div className="card-body">
        {block && <p>Block: {block}</p>}
        <p>District: {district}</p>
        <p>State: {state}</p>
      </div>
      <div className="card-footer">Pincode: {pincode}</div>
    </div>
  );
};

export default Card;
