import axios from 'axios';
import { useEffect, useState } from 'react';

export const widthUser = (Component) => {
  return (props) => {
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
    console.log(user);

    return <Component {...props} user={user} />;
  };
};

// higher order component