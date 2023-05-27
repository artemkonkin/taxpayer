import React from 'react';

interface InputProps {
  type: 'text' | 'number' | 'date' | 'checkbox' | 'radio' | 'select' | 'textarea';
  name: string;
  value?: string | number | boolean;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField1: React.FC<InputProps> = ({ name, value, onChange }) => {
  return (
    <input
      type="text"
      name={name}
      value={value as string | number | readonly string[] | undefined}
      onChange={onChange}
      className="border border-gray-400 p-2 rounded-md"
    />
  );
};

export default InputField1;