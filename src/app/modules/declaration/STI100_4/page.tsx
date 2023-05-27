'use client';

import React from 'react';
import { STI100_4Declaration } from './types/STI100_4Declaration';
import STI100_4DeclarationPart2 from './partials/STI100_4DeclarationPart2';

const STI100_4: React.FC = () => {
  const handleSubmit = (formData: STI100_4Declaration) => {
    console.log(formData);
  };

  const initialFormData: STI100_4Declaration = {
    REGISTRATIONADDRESSSTREET: 'REGISTRATIONADDRESSSTREET',
    EMAIL: 'EMAIL',
    PASSPORTCOUNTRY: 'PASSPORTCOUNTRY',
    ACTIONZIP: 'ACTIONZIP',
    ACTIONADDRESSOBL: 'ACTIONADDRESSOBL',
    ACTIONADDRESSSTREET: 'ACTIONADDRESSSTREET',
    STI100X050: 0,
    STI100X051: 0,
    STI100X052: 0,
    STI100X053: 0,
    STI100X054: 0,
    STI100X055: 0,
    STI100X056: 0,
    STI100X057: 0,
    STI100X058: 0,
    STI100X059: 0,
    STI100X060: 0,
    STI100X061: 0,
    STI100X062: 0,
    STI100X063: 0,
    STI100X064: 0,
    STI100X065: 0,
  };

  return (
    <div className='flex flex-col space-y-4'>
      <STI100_4DeclarationPart2 initialFormData={initialFormData} onSubmit={handleSubmit} />
    </div>
  );
};

export default STI100_4; 