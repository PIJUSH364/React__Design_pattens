import { Stack } from '@mui/material';
import React from 'react';

function InputForm({ user, onChangeUser, onSaveUser, onResetUser }) {
  const { name, website, phone } = user || {};
  return user ? (
    <Stack width="300px" m={5}>
      <label>
        Name :
        <input
          type="text"
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
      </label>
      <label>
        ContactNo :
        <input
          type="text"
          value={phone}
          onChange={(e) => onChangeUser({ phone: e.target.value })}
        />
      </label>
      <label>
        Website :
        <input
          type="text"
          value={website}
          onChange={(e) => onChangeUser({ website: e.target.value })}
        />
      </label>
      <div>
        <button onClick={onResetUser}>Reset</button>
        <br />
        <button onClick={onSaveUser}>Save Changes</button>
      </div>
    </Stack>
  ) : (
    <p>Loading...</p>
  );
}

export default InputForm;
