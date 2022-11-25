export const printProps = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props}/>;
  };
};

// export const UserInfoWarraped = (props) => {
//   console.log(props);
//   return <Component />;
// };
