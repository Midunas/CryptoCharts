import Image from 'next/image'
import React from 'react'

const NavBar = () => {

  return (
    <div className='text-white flex h-16 bg-zinc-900 items-center justify-between'>
      <h1 className='text-4xl text-white ml-5'>Top 10 Crypto</h1>
      <div className='flex'>
        <div className='flex gap-x-8 mr-10 items-center'>
          <a href='https://www.binance.com/en'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/binance.jpg'
              alt='binance'
              width={60}
              height={60}
              className='rounded'
            ></Image>
          </a>
          <a
            href='https://capital.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/cpt.png'
              alt='capital'
              width={150}
              height={150}
              className='rounded'
            ></Image>
          </a>
          <a
            href='https://www.etoro.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/etoro.png'
              alt='capital'
              width={45}
              height={50}
              className='rounded'
            ></Image>
          </a>
        </div>
      </div>
    </div>

  )
}

export default NavBar;