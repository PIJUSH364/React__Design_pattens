import { Box } from '@mui/material';
import React from 'react';

function Discount({ goToNext }) {
  alert(`you save $120`);
  return (
    <>
      <Box m={4} textAlign="center">
        <h3>Congratulation! You got 15% Discount 😵‍💫 in your order</h3>
      </Box>
      <button onClick={() => goToNext()}>Next</button>
    </>
  );
}

export default Discount;
