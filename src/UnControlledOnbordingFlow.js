import React, { useState } from 'react';

function UnControlledOnbordingFlow({ children, onFinish }) {
  const [onBordingData, setOnBordingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentChild = React.Children.toArray(children)[currentIndex];

  const goToNext = () => {
    if (currentIndex < children.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (React.isValidElement(currentChild)) {
    // goToNext props pass on every child

    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
}

export default UnControlledOnbordingFlow;
