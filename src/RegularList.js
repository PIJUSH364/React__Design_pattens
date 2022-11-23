import React from 'react';

function RegularList({ items, resourceName, itemComponent: ItemComponent }) {
  // item is list of object (i.e,product or people)
  // itemComponent is a component (like:SmallpersonListItem,LargeProductListItem)
  // resourceName is like indivisual object(person is resourceName)
  //todo ::  person:{item} === {...{ [resourceName]: item }}

  return (
    <>
      {items.map((item, key) => (
        <ItemComponent key={key} {...{ [resourceName]: item }} />
      ))}
    </>
  );
}

export default RegularList;
 