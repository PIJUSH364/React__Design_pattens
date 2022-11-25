import React from 'react';
import { printProps } from './printProps';
import { UserInfo } from './UserInfo';
import { widthUser } from './widthUser';

const UserInfoWarraped = printProps(UserInfo);
const UserInfoLoder = widthUser(UserInfo);

function App() {
  return (
    <>
      <UserInfoWarraped name="Pijush" />
      <UserInfoLoder />
    </>
  );
}

export default App;
