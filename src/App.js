import React from 'react';
import UnControlledOnbordingFlow from './UnControlledOnbordingFlow';

// this all are component
const StepOne = ({ goToNext }) => (
  <>
    <h1>StepOne</h1>
    <button onClick={goToNext}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>StepTwo</h1>
    <button onClick={goToNext}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>StepThree</h1>
    <button onClick={goToNext}>Next</button>
  </>
);

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
