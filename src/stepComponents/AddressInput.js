import { Stack } from '@mui/material';
import React, { useState } from 'react';

function AddressInput({ goToNext }) {
  const [userInfo, setUserInfo] = useState({});
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [contactNo, setContactNo] = useState(9999999999);
  const [city, setCity] = useState('');
  const [pin, setPin] = useState(0);

  const handleSubmit = (e) => {
    const userInfo = {
      fullName: fullName,
      userName: userName,
      contactNo: contactNo,
      add: {
        city: city,
        pin: pin,
      },
    };
    setUserInfo(userInfo);
    e.preventDefault();
  };
  console.log(userInfo);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack m={3} maxWidth="300px">
          <input
            type="text"
            name="fullName"
            placeholder="Your Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            name="userName"
            placeholder="Enter userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="number"
            name="contactNo"
            placeholder="Your contactNo"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
          <label htmlFor="city">Address ⏬</label>
          <input
            type="text"
            name="city"
            placeholder="Your City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="number"
            name="pin"
            placeholder="Postal Code"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <button type="submit">Submit</button>
        </Stack>
      </form>
      <button onClick={() => goToNext({...userInfo})}>Next</button>
    </>
  );
}

export default AddressInput;
