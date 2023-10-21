import React from 'react';

const PriceTag = ({ price }) => {
  // Format the price with currency symbol, decimals, etc.
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(price);

  return (
    <span className="price-tag">
      {formattedPrice}
    </span>
  );
};

export default PriceTag;
