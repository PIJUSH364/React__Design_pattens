import React from 'react';

function UncontrolledForm() {
  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hairColorInput = React.createRef();
  const handleSubmit = (e) => {
    const userInfo = {
      name: nameInput.current.value,
      age: ageInput.current.value,
      hairColor: hairColorInput.current.value,
    };
    console.log(userInfo);
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="your name"
          ref={nameInput}
        />
        <input type="number" name="age" placeholder="your age" ref={ageInput} />
        <input
          type="text"
          name="hairColor"
          placeholder="your hairColor"
          ref={hairColorInput}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default UncontrolledForm;
