import React, { useState } from 'react';

function UnControlledOnbordingFlow({ children, onFinish }) {
  const [onBordingData, setOnBordingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentChild = React.Children.toArray(children)[currentIndex];

  return (
    <>
      {currentChild}
      <button
        onClick={() => setCurrentIndex((preIndex) => preIndex - 1)}
        style={{
          display: `${currentIndex === 0 ? 'none' : 'inline-block'}`,
        }}
      >
        prev
      </button>
      <button
        onClick={() => setCurrentIndex((preIndex) => preIndex + 1)}
        style={{
          display: `${
            currentIndex === children.length - 1 ? 'none' : 'inline-block'
          }`,
        }}
      >
        next
      </button>
    </>
  );
}

export default UnControlledOnbordingFlow;
