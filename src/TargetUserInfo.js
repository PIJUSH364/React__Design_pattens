import React from 'react';
import { useUser } from './useUser';

function TargetUserInfo({ userId }) {
  const user = useUser(userId);
  const { name, website, phone, id } = user || {};
  return user ? (
    <>
      <h3>
        {id}🌑
        {name}
      </h3>
      <p>phone : {phone} </p>
      <p>
        website: <a href={website}>{website}</a>
      </p>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default TargetUserInfo;
