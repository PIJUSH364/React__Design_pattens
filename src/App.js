import React, { useState } from 'react';
import OnBordData from './OnBordData';
import AddressInput from './stepComponents/AddressInput';
import Discount from './stepComponents/Discount';
import PlaceOrder from './stepComponents/PlaceOrder';
import Purches from './stepComponents/Purches';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [onBordingData, setOnBordingData] = useState({});

  const onNext = (stepData) => {
    setOnBordingData({ ...onBordingData, ...stepData });
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      <OnBordData currentIndex={currentIndex} onNext={onNext}>
        <AddressInput />
        <Purches />
        {onBordingData.coupon === 'disMac13' ? <Discount /> : null}
        <PlaceOrder />
      </OnBordData>
    </>
  );
}

export default App;
