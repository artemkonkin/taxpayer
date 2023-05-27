import React from 'react';

interface ContentProps {
}

const Content: React.FC<ContentProps> = ({ }) => {
  return (
    <div className='flex w-full bg-slate-50 p-4'>
      <p>
        Content
      </p>
    </div>
  );
};

export default Content;