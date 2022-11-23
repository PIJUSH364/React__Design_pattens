import React from 'react';

function SmallproductListItem({ product }) {
  const { name, price } = product;
  return (
    <h3>
      {name}--{price}
    </h3>
  );
}

export default SmallproductListItem;
