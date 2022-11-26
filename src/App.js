import { Typography } from '@mui/material';
import React from 'react';
import { BigSuccessButton, DangerButton } from './composition';

function App() {
  return (
    <div>
      <DangerButton text="DangerButton" />
      <BigSuccessButton text="Success" size="large" />
    </div>
  );
}

export default App;
