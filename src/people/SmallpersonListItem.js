import React from 'react';

function SmallpersonListItem({ person }) {
  const { name, age } = person;
  return (
    <p>
      Name👨{name},Age💛:{age} years
    </p>
  );
}

export default SmallpersonListItem;
