import React from 'react';

interface ColProps {
  children: React.ReactNode;
}

const Col: React.FC<ColProps> = ({ children }) => {
  return (
    <div className='flex flex-col'>
      {children}
    </div>
  );
};

export default Col;