import React from 'react';
import ControlledForm from './ControlledForm';
import Modal from './Modal';
import UncontrolledForm from './UncontrolledForm';

function App() {
  return (
    <>
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      <Modal>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque
          dolore dicta voluptatum!
        </p>
      </Modal>
    </>
  );
}

export default App;
