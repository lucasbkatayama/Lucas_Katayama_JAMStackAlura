import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Header from '../components/Header/Header';
import { Grid } from '../components/Grid';
import logo from '../assets/img/background.jpg';
import { items } from './data';

export const List = () => (
  <Container>
    <Grid.Container>
      <Grid.Row>
        {items.map((item) => (
          <Grid.Col value={{ xs: 12, md: 4 }} padding="10px">
            <Card>
              <Image src={logo} />
              <Overlay>
                <Text>
                  <h4>ARQUITETURA</h4>
                  some description of the project
                </Text>
              </Overlay>
            </Card>
          </Grid.Col>
        ))}
      </Grid.Row>
    </Grid.Container>
  </Container>
);

const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: green;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.31);
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  &:hover ${Overlay} {
    opacity: 0.75;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
`;

const Text = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;
