import { Divider } from '@mui/material';
import React from 'react';
import TargetUserInfo from './TargetUserInfo';
import UserInfo from './UserInfo';

function App() {
  return (
    <>
      <UserInfo />
      <TargetUserInfo userId="2" />
      <Divider />
      <TargetUserInfo userId={5} />
      <Divider />
      <TargetUserInfo userId={1} />
    </>
  );
}

export default App;
