import React from 'react';
import UnControlledOnbordingFlow from './UnControlledOnbordingFlow';

// this all are component
const StepOne = ({ goToNext }) => (
  <>
    <h1>StepOne</h1>
    <button onClick={() => goToNext({ name: 'pijush ray mondal' })}>
      Next
    </button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>StepTwo</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>StepThree</h1>
    <button onClick={() => goToNext({ hairColor: 'brownGray' })}>Next</button>
  </>
);

function App() {
  return (
    <UnControlledOnbordingFlow
      onFinish={(data) => {
        alert('onboarding Complete!');
        console.log(data);
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </UnControlledOnbordingFlow>
  );
}

export default App;
