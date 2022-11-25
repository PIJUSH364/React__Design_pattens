import React from 'react';
import { useCurrentUser } from '../oneHook/useCurrentUser';
import { useResource } from './useResource';

function ResourceUserInfo() {
  const user = useResource('https://jsonplaceholder.typicode.com/users');
  const { name, website, phone } = user || {};

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

export default ResourceUserInfo;
