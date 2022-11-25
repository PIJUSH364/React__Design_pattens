//! higher order component(function)

import axios from 'axios';
import { useEffect, useState } from 'react';

export const withEaditableUser = (Component) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);
    const userId = '234';
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then(function (response) {
          setOriginalUser(response.data[0]);
          setUser(response.data[0]);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      // const response = await axios.post(`/user/${userId}`, { user });
      // setOriginalUser(response.data);
      // setUser(response.data);
      alert('this funcanality not build');
    };

    // something when editable from user site
    const onResetUser = async () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
};
