//! higher order component(function)

import axios from 'axios';
import { useEffect, useState } from 'react';

const capitalize = (str) => {
  // user->User,product->Product
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// resourcePath ::"https://jsonplaceholder.typicode.com/users"
// resourceName :: "user","product"

export const withEditableResouce = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      axios
        .get(resourcePath)
        .then(function (response) {
          setOriginalData(response.data[0]);
          setData(response.data[0]);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

    // something when editable from user site
    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onReset = async () => {
      setData(originalData);
    };

    const onSave = async () => {
      //! { user }==={[resourceName]:data }
      // const response = await axios.post(resourcePath, {[resourceName]:data });
      // setOriginalData(response.data);
      // setData(response.data);
      alert('this funcanality not build');
    };

    //* resource props similar to this
    // user={user}
    // onChangeUser={onChange}
    // onSaveUser={onSave}
    // onResetUser={onReset}}

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };
    return <Component {...props} {...resourceProps} />;
  };
};
