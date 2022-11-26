import React from 'react';

// ? return passing object true or false
const isObject = (obj) => typeof obj === 'object' && obj != null;

function RecurciveComponent({ data }) {
  if (!isObject(data)) {
    return <span>{data}</span>;
  }

  const pairs = Object.entries(data);
  console.log(pairs);
  console.log(typeof pairs);

  return (
    <>
      {pairs.map(([key, value]) => (
        <li key={key}>
          key {key} :
          <ul>
            <RecurciveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
}

export default RecurciveComponent;
