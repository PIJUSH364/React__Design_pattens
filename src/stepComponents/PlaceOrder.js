import { Stack } from '@mui/material';
import React from 'react';

function PlaceOrder() {
  return (
    <>
      <Stack textAlign="center" alignItems="center" width="300px" m={2}></Stack>
      <h2>Apple MacBook Pro 2022</h2>
      <img
        src="https://media.croma.com/image/upload/v1664412955/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256605_0_elrzey.png"
        alt="product"
        width="120px"
      />
      <h3>price:$620</h3>
      <button>Confirm Your Order</button>
      <Stack />
    </>
  );
}

export default PlaceOrder;
