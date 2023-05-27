'use client';

import React, { useState } from 'react';
import InputProps from '../components/InputProps';

interface STI100_3Declaration {
  STI100X050: number;
  STI100X051: number;
  STI100X052: number;
  STI100X053: string;
  STI100X054: number;
  STI100X055: boolean;
  STI100X056: string;
  STI100X057: number;
  STI100X058: boolean;
  STI100X059: string;
  STI100X060: string;
  STI100X061: number;
  STI100X062: boolean;
  STI100X063: string;
  STI100X064: number;
  STI100X065: boolean;
}

interface FormProps {
  formValues: STI100_3Declaration;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface STI100_3Declaration {
  [key: string]: string | number | boolean;
  STI100X050: number;
  STI100X051: number;
  STI100X052: number;
  STI100X053: string;
  STI100X054: number;
  STI100X055: boolean;
  STI100X056: string;
  STI100X057: number;
  STI100X058: boolean;
  STI100X059: string;
}

const FirstTenFields: React.FC<FormProps> = ({ formValues, onInputChange }) => {
  const fields = [
    { name: "STI100X050", type: "number" },
    { name: "STI100X051", type: "number" },
    { name: "STI100X052", type: "number" },
    { name: "STI100X053", type: "text" },
    { name: "STI100X054", type: "number" },
    { name: "STI100X055", type: "checkbox" },
    { name: "STI100X056", type: "text" },
    { name: "STI100X057", type: "number" },
    { name: "STI100X058", type: "checkbox" },
    { name: "STI100X059", type: "text" },
  ];

  return (
    <>
      {fields.map((field) => (
        <InputProps
          key={field.name}
          type={field.type as "number" | "text" | "checkbox" | "select" | "textarea" | "date" | "radio"}
          name={field.name}
          value={formValues[field.name] as string}
          checked={formValues[field.name] as boolean}
          onChange={onInputChange}
        />
      ))}
    </>
  );
};

const SecondTenFields: React.FC<FormProps> = ({ formValues, onInputChange }) => {
  return (
    <>
      <InputProps type="text" name="STI100X060" value={formValues.STI100X060} onChange={onInputChange} />
      <InputProps type="number" name="STI100X061" value={formValues.STI100X061} onChange={onInputChange} />
      <InputProps type="checkbox" name="STI100X062" checked={formValues.STI100X062} onChange={onInputChange} />
      <InputProps type="text" name="STI100X063" value={formValues.STI100X063} onChange={onInputChange} />
      <InputProps type="number" name="STI100X064" value={formValues.STI100X064} onChange={onInputChange} />
      <InputProps type="checkbox" name="STI100X065" checked={formValues.STI100X065} onChange={onInputChange} />
    </>
  );
};

const Form: React.FC = () => {
  const [formValues, setFormValues] = useState<STI100_3Declaration>({
    STI100X050: 0,
    STI100X051: 0,
    STI100X052: 0,
    STI100X053: '',
    STI100X054: 0,
    STI100X055: false,
    STI100X056: '',
    STI100X057: 0,
    STI100X058: false,
    STI100X059: '',
    STI100X060: '',
    STI100X061: 0,
    STI100X062: false,
    STI100X063: '',
    STI100X064: 0,
    STI100X065: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    if (name === 'STI100X051' || name === 'STI100X052') {
      const sum = Number(formValues.STI100X051) + Number(formValues.STI100X052);
      setFormValues({ ...formValues, [name]: newValue, STI100X050: sum });
    } else {
      setFormValues({ ...formValues, [name]: newValue });
    }

  };

  return (
    <form>
      <FirstTenFields formValues={formValues} onInputChange={handleInputChange} />
      <SecondTenFields formValues={formValues} onInputChange={handleInputChange} />
    </form>
  );
};

export default Form;