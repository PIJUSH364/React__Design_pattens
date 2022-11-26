// template of a button
export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === 'large' ? '32px' : '10px',
        fontSize: size === 'large' ? '28px' : '16px',
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

// this all are customize button
export const DangerButton = (props) => {
  return <Button {...props} color="red" />;
};

export const BigSuccessButton = (props) => {
  return <Button {...props} color="green" />;
};
