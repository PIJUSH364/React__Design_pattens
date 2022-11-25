import axios from 'axios';
import React from 'react';
import { useDataSource } from './useDataSource';

const serverResource = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data[0];
};

// when data fetching from cookies
const localstrogeResource = (key) => async () => {
  return localStorage.getItem(key);
};

function DataUserInfo() {
  const user = useDataSource(
    serverResource('https://jsonplaceholder.typicode.com/users')
  );

  // local storage data(optinal)
  const message = useDataSource(localstrogeResource('message'));

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

export default DataUserInfo;
