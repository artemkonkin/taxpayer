'use client';

import React, { useState } from 'react';
import { SignIn } from './types/signIn';
import SignInForm from './components/signInForm';

interface UserData {
  email: string;
  password: string;
  jwtToken: string;
}

const Page = () => {

  const [showComponent, setShowComponent] = useState(false);

  const initialFormData: SignIn = {
    userName: '23010199601069475',
    password: '12345678',
    firebaseToken: '<string>'
  };

  const handleClick = () => {
    setShowComponent(true);
  };

  async function getData() {
    const res = await fetch('https://localhost:44309/api/Token/authenticate');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }

  return (
    <div className='flex flex-row space-x-4'>
      <div className='flex flex-col bg-white p-4 shadow-lg w-4/12 rounded-lg space-y-4'>
        <p className='font-bold'>Войти или зарегистрироваться</p>
        <div>
          <button onClick={handleClick}>Войти</button>
          {showComponent && <SignInForm initialFormData={initialFormData} onSubmit={async function (formData: SignIn): Promise<void> {

            console.log(formData);

            console.log(await getData());

          }} />}
        </div>
      </div>
    </div>
  );
};

export default Page;