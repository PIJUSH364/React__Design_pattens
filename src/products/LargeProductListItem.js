import { Rating } from '@mui/material';
import React from 'react';

function LargeProductListItem({ product }) {
  const { name, price, description, rating } = product;
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description :</h3>
      <p>{description}</p>
      <Rating value={rating} precision={0.5} />
    </>
  );
}

export default LargeProductListItem;
