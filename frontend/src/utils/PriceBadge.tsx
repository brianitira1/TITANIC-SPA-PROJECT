import React from "react";

interface PriceBadgeProps {
  price: number;
}

/**
 * PriceBadge component to display the price in a badge
 * @param {number} price - The price to be displayed
 */
const PriceBadge: React.FC<PriceBadgeProps> = ({ price }) => {
  // Log the price for debugging purposes
  console.log('PriceBadge - price:', price);
  // Return the JSX for the PriceBadge component
  return (
    <div className="position-relative">
      <span className="position-absolute top-100 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
        {price}
      </span>
    </div>
  );
};

export default PriceBadge;
