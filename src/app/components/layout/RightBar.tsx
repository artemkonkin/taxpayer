import React from 'react';
import Link from 'next/link';

interface RightBarProps {
}

const RightBar: React.FC<RightBarProps> = ({ }) => {
  return (
    <div className='flex w-2/12 p-4'>
      <p>
        Right bar
      </p>
    </div>
  );
};

export default RightBar;