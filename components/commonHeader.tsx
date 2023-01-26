'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import Link from 'next/link';

type Props = {};

export default function CommonHeader({}: Props) {
  const [login, setLogin] = React.useState(false);
  return (
    <div className=' border-b'>
      <div className='flex justify-between max-w-7xl mx-auto'>
        <div className='flex justify-center items-center'>
          <Image
            src={Logo}
            className='rounded-full border-none cursor-pointer'
            alt='OMI'
          />
          <span className='hidden lg:text-4xl text-gray-400'>OMI</span>
        </div>
        <div className='flex justify-center items-center'>
          <ul className='flex'>
            <Link
              className='mx-4 hover:bg-blue-500 hover:text-white transition px-4 py-2 rounded-full'
              href='/about'
            >
              <li>About</li>
            </Link>
            <Link
              className='mx-4 hover:bg-blue-500 hover:text-white transition px-4 py-2 rounded-full'
              href='/contents'
            >
              <li>Contents</li>
            </Link>
            <Link
              className='mx-4 hover:bg-blue-500 hover:text-white transition px-4 py-2 rounded-full'
              href='/community'
            >
              <li>Community</li>
            </Link>
            {login ? (
              <Link
                className='mx-4 hover:bg-blue-500 hover:text-white transition px-4 py-2 rounded-full'
                href='/login'
              >
                <li>login</li>
              </Link>
            ) : (
              <Link
                className='mx-4 hover:bg-blue-500 hover:text-white transition px-4 py-2 rounded-full'
                href='/register'
              >
                <li>Register</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
