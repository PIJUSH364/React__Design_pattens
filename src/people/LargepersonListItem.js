import React from 'react';

function LargepersonListItem({ person }) {
  const { name, age, hairColor, hobbies } = person;
  return (
    <>
      <h3>👨{name}</h3>
      <p>Age : {age}</p>
      <p>HairColor :{hairColor}</p>
      <h5>Hobbies :</h5>
      <ul>
        {hobbies.map((hobby, key) => (
          <li key={key}>{hobby} </li>
        ))}
      </ul>
    </>
  );
}

export default LargepersonListItem;
