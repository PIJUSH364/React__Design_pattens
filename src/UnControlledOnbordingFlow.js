import React, { useState } from 'react';

function UnControlledOnbordingFlow({ children, onFinish }) {
  const [onBordingData, setOnBordingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentChild = React.Children.toArray(children)[currentIndex];

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    const updatedData = {
      // combine previous(onBordingData) data with current data(stepData)
      ...onBordingData,
      ...stepData,
    };

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }
    console.log(updatedData);
    setOnBordingData(updatedData);
  };

  if (React.isValidElement(currentChild)) {
    // goToNext props pass on every child
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
}

export default UnControlledOnbordingFlow;
