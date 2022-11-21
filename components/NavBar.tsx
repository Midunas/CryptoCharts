import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {

  return (
    <div className='nav'>
      <Link href='/' className='text-4xl text-white ml-5'>Grypto</Link>
      <div className='flex'>
        <div className='flex gap-x-8 mr-10 items-center'>
          <a href='https://www.binance.com/en'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/BNC.png'
              alt='binance'
              width={40}
              height={40}
              className='rounded'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar;