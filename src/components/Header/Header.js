import React from 'react';
import { Header, Navbar } from './Header.styles';
import Button from '../Button/Button';

const StyledHeader = (props) => (
  <Header {...props}>
    <Navbar>
      <Button as="a" href="#about">
        Sobre
      </Button>
      <Button as="a" href="#works">
        Trabalhos
      </Button>
      <Button as="a" href="#reviews">
        Avaliações
      </Button>
      <Button as="a" href="#contact">
        Contato
      </Button>
    </Navbar>
  </Header>
);

export default StyledHeader;
