import { Stack, Typography } from '@mui/material';
import React from 'react';
import RecurciveComponent from './RecurciveComponent';

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: 'Hello',
    },
    b3: {
      b31: {
        message: 'Hi',
      },
      b32: {
        message: 'Hi',
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

function App() {
  return (
    <Stack m={4}>
      <RecurciveComponent data={nestedObject} />
    </Stack>
  );
}

export default App;
