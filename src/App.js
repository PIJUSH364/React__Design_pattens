import React from 'react';
import UnControlledOnbordingFlow from './UnControlledOnbordingFlow';

// this all are component
const StepOne = () => <h1>StepOne</h1>;
const StepTwo = () => <h1>StepTwo</h1>;
const StepThree = () => <h1>StepThree</h1>;

function App() {
  return (
    <UnControlledOnbordingFlow>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UnControlledOnbordingFlow>
  );
}

export default App;
