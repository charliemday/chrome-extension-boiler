import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = (props) => {
  return (
    <button className="border border-white rounded-md px-2 py-1" {...props} />
  );
};

export default Button;
