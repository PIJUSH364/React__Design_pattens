import React, { useState } from 'react';
import ControlledForm from './ControlledForm';
import ControlledModal from './ControlledModal';
import Modal from './Modal';
import UncontrolledForm from './UncontrolledForm';

function App() {
  const [shouldShowModel, setShouldShowModel] = useState(false);
  return (
    <>
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      {/* <Modal>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque
          dolore dicta voluptatum!
        </p>
      </Modal> */}
      <ControlledModal
        shouldShow={shouldShowModel}
        onRequestClose={() => setShouldShowModel(false)}
      >
        <h3>controlled component</h3>
      </ControlledModal>
      <button onClick={() => setShouldShowModel(!shouldShowModel)}>
        {shouldShowModel ? 'Hide Modal' : 'Show Modal'}
      </button>
    </>
  );
}

export default App;
