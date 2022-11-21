import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const NavBar = () => {

  return (
    <div className='text-white flex h-16 bg-zinc-900 w-5/5 items-center justify-between'>
      <Link href='/' className='text-4xl text-white ml-5'>Crypto</Link>
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
            ></Image>
          </a>
        </div>
      </div>
    </div>

  )
}

export default NavBar;