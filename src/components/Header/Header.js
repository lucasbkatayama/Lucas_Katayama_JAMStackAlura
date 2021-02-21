import React from 'react';
import { Header, Navbar } from './Header.styles';

const StyledHeader = (props) => (
  <Header {...props}>
    <Navbar>
      <a href="#about">sobre</a>
      {' '}
      |
      <a href="#works">trabalhos</a>
      {' '}
      |
      <a href="#reviews">avaliações</a>
      {' '}
      |
      <a href="#contact">contato</a>
    </Navbar>
  </Header>
);

export default StyledHeader;
