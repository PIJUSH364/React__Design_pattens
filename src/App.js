import React from 'react';
import InputForm from './InputForm';
import { printProps } from './printProps';
import { UserInfo } from './UserInfo';
import { UserInfoForm } from './UserInfoForm';
import { widthUser } from './widthUser';
import { withEditableResouce } from './withEditableResouce';

const UserInfoWarraped = printProps(UserInfo);
const UserInfoLoder = widthUser(UserInfo);

const ImprovementsUserInfoForm = withEditableResouce(
  InputForm,
  'https://jsonplaceholder.typicode.com/users',
  'user'
);

function App() {
  return (
    <>
      {/* <UserInfoWarraped name="Pijush" />
      <UserInfoLoder /> */}
      {/* <UserInfoForm /> */}
      
      {/* below this is impropment version of reUsable Hoc  */}
      <ImprovementsUserInfoForm />
    </>
  );
}

export default App;
