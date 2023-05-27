import React from 'react';

interface RowProps {
  children: React.ReactNode[];
}

const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <div className='flex flex-row space-x-4 w-full'>
      {children.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
};

export default Row;