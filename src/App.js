import React from 'react';
import SplictScreen from './SplictScreen';

const LeftHandComponent = () => {
  return (
    <h1
      style={{
        textAlign: 'center',
        backgroundColor: 'gray',
      }}
    >
      Left SubContainer!🐣
    </h1>
  );
};
const RightHandComponent = () => {
  return (
    <h1
      style={{
        textAlign: 'center',
        backgroundColor: 'gray',
      }}
    >
      Right SubContainer!🎯
    </h1>
  );
};
function App() {
  return (
    <SplictScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent />
      <RightHandComponent />
    </SplictScreen>
  );
}

export default App;
