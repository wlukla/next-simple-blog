import React from 'react';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
