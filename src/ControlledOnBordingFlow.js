import React from 'react';

function ControlledOnBordingFlow({ children,  currentIndex, onNext }) {
  const currentChild = React.Children.toArray(children)[currentIndex];
  const goToNext = (stepData) => {
    onNext(stepData);
  };

  if (React.isValidElement(currentChild)) {
    // goToNext props pass on every child
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
}

export default ControlledOnBordingFlow;
