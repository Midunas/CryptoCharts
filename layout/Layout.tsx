import React from 'react';
import NavBar from '../components/NavBar';

type LayoutProps = {
  children: JSX.Element
}

const Layout = ({
  children
}: LayoutProps) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  )
}

export default Layout