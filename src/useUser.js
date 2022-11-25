import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }, [userId]);

  return user;
};
