import React, { useEffect, useState } from 'react';

function ControlledForm() {
  const [inputError, setInputError] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState('');

  const handleSubmit = (e) => {
    const userInfo = {
      name: name,
      age: age,
      hairColor: hairColor,
    };
    console.log(userInfo);
    e.preventDefault();
  };
  useEffect(() => {
    if (name.length < 2) {
      setInputError('name must be two or more chacter');
    }
  }, [name]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          name="age"
          placeholder="your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          name="hairColor"
          placeholder="your hairColor"
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>{inputError}</h4>
    </>
  );
}

export default ControlledForm;
