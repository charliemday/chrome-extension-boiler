import React from 'react';
import 'assets/styles/tailwind.css';
import { BsCheckCircle } from 'react-icons/bs';

interface Props {
  title: string;
}

const ListItem: React.FC<Props> = ({ title }) => {
  return (
    <div
      className="flex"
      style={{
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <BsCheckCircle color="green" />
      <p className="border pl-2">{title}</p>
    </div>
  );
};

export default ListItem;
