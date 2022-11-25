import { Divider } from '@mui/material';
import React from 'react';
import DataUserInfo from './functonHook/DataUserInfo';
import ResourceUserInfo from './resourceHook/ResourceUserInfo';
import TargetUserInfo from './urlHook/TargetUserInfo';

function App() {
  return (
    <>
      <DataUserInfo />
      <Divider />
      <br />
      <b>indivisual data</b>
      <br />
      <Divider />
      <TargetUserInfo userId="2" />
      <Divider />
      <TargetUserInfo userId={5} />
      <Divider />
      <TargetUserInfo userId={1} />
      <Divider />
      <b> useing url props</b>
      <Divider />
      <ResourceUserInfo />
      <Divider />
      <b> useing functon</b>
      <Divider />
      <DataUserInfo />
    </>
  );
}

export default App;
