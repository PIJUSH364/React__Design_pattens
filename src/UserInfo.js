import React from 'react';
import { useCurrentUser } from './useCurrentUser';

function UserInfo() {
  const user = useCurrentUser();
  const { name, website, phone } = user || {};

  console.log('from userinfo', user);
  return user ? (
    <>
      <h3>{name}</h3>
      <p>phone : {phone} </p>
      <p>
        website: <a href={website}>{website}</a>
      </p>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default UserInfo;
