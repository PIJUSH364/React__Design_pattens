import React, { useState } from 'react';

function ControlledForm() {
  const [name, setname] = useState('');
  const [age, setAge] = useState();
  const [HairColor, setHairColor] = useState('');
  
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ControlledForm;
