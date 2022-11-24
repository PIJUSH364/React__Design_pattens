import React, { useState } from 'react';
import ControlledOnBordingFlow from './ControlledOnBordingFlow';
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
    <button onClick={() => goToNext({ age: 10 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>StepThree</h1>
    <p>congratulation!🔐 you are Qualify our seniour discouunt!</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);
const StepFour = ({ goToNext }) => (
  <>
    <h1>StepFour</h1>
    <button onClick={() => goToNext({ hairColor: 'brownGray' })}>Next</button>
  </>
);

function App() {
  const [onBordingData, setOnBordingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnBordingData({ ...onBordingData, ...stepData });
    if (currentIndex < 2) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    // <UnControlledOnbordingFlow
    //   onFinish={(data) => {
    //     alert('onboarding Complete!');
    //     console.log(data);
    //   }}
    // >
    //   <StepOne />
    //   <StepTwo />
    //   <StepThree />
    // </UnControlledOnbordingFlow>
    <ControlledOnBordingFlow currentIndex={currentIndex} onNext={onNext}>
      <StepOne />
      <StepTwo />
      {onBordingData.age > 60 ? <StepThree /> : null}
      <StepFour />
    </ControlledOnBordingFlow>
  );
}

export default App;
