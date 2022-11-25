import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(function (response) {
        setUser(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return user;
};
