import React from 'react';
import Header from './Header';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  border: 1px solid black;
`;

export default Layout;
