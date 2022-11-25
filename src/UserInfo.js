export const UserInfo = ({ user }) => {
  const { name, website, phone } = user || {};

  return user ? (
    <>
      <h3>{name}</h3>
      <p>phone : {phone} </p>
      <p>
        website: <a href={website}>{website}</a>
      </p>
    </>
  ) : (
    <p>Loading...</p>
  );
};
