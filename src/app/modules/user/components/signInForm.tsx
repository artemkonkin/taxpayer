'use client';

import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { SignIn } from '../types/signIn';
import { LabelTypeEnum } from '@/app/shared/enums/LabelTypeEnum';
import InputProp from '../../declaration/components/InputProp';

interface FormProps {
  initialFormData: SignIn;
  onSubmit: (formData: SignIn) => Promise<void>;
}

const SignInForm: React.FC<FormProps> = ({ initialFormData, onSubmit }) => {

  const formFields = [
    { num: 'Логин', name: 'userName', type: 'string', desc: 'Логин' },
    { num: 'Пароль', name: 'password', type: 'string', desc: 'Пароль' },
  ];

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div className='flex flex-row flex-wrap p-6 pt-2 bg-slate-100 rounded-lg'>
        {formFields.map(({ num, name, type, desc }) => (
          <InputProp
            key={name}
            num={num}
            name={name}
            type={type}
            value={formData[name as keyof SignIn]}
            size="w-6/12 pt-4 pr-4"
            desc={desc}
            labelType={LabelTypeEnum.Top}
            onChange={handleChange}
          />
        ))}
      </div>

      <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </form>
  );
};

export default SignInForm;