import React from "react";

const PriceBadge = ({ price }) => {
  return (
    <div className="position-relative">
      <span className="position-absolute top-100 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
        {price}
      </span>
    </div>
  );
};

export default PriceBadge;
