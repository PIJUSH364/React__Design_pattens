import React from 'react';
import { printProps } from './printProps';
import { UserInfo } from './UserInfo';
import { UserInfoForm } from './UserInfoForm';
import { widthUser } from './widthUser';

const UserInfoWarraped = printProps(UserInfo);
const UserInfoLoder = widthUser(UserInfo);

function App() {
  return (
    <>
      {/* <UserInfoWarraped name="Pijush" />
      <UserInfoLoder /> */}
      <UserInfoForm />
    </>
  );
}

export default App;
