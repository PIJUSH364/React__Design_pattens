import { Stack } from '@mui/material';
import React, { useState } from 'react';

function Purches({ goToNext }) {
  const [componentData, setComponentData] = useState({});
  const [couponCode, setCouponCode] = useState('');

  const handleToCart = () => {
    const productInfo = {
      model: 'Mac13',
    };
    setComponentData({ ...componentData, ...productInfo });
  };
  const handleApply = (e) => {
    if (couponCode === 'disMac13') {
      alert('Correct coupon');
    } else {
      alert('wrong coupon');
    }

    const disDetail = {
      price: 620,
      coupon: couponCode,
    };
    setComponentData({ ...componentData, ...disDetail });
    e.preventDefault();
  };

  return (
    <>
      <Stack textAlign="center" alignItems="center" width="300px" m={2}>
        <h2>
          Apple MacBook Pro 2022 (M2, 13.3 Inch, 8GB, 256GB, macOS Monterey,
          Space Grey)
        </h2>
        <img
          src="https://media.croma.com/image/upload/v1664412955/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256605_0_elrzey.png"
          alt="product"
          width="200px"
        />
        <h3>price:$780</h3>
        <form onSubmit={handleApply}>
          <input
            type="text"
            placeholder="Enter Secret code "
            name="couponCode"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button type="submit">Apply</button>
        </form>

        <button onClick={handleToCart}>Add To Cart</button>
      </Stack>
      <button onClick={() => goToNext({ ...componentData })}>Next</button>
    </>
  );
}

export default Purches;
