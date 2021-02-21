import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Header from '../components/Header/Header';
import { Grid } from '../components/Grid';
import background from '../assets/img/background.jpg';
import logo from '../assets/img/logo.png';

const Home = () => (
  <Container>
    <Grid.Container>
      <Grid.Row>
        <Grid.Col value={{ xs: 0, md: 4 }}>
          <Section
            as={motion.div}
            transition={{ delay: 0, duration: 0.3 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '-100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <div style={{
              width: '100%', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            >
              <img src={logo} style={{ width: '50%' }} />
            </div>
          </Section>
        </Grid.Col>
        <Grid.Col
          value={{
            xs: 12,
            md: 8,
          }}
        >
          <Header
            as={motion.div}
            transition={{ delay: 0, duration: 0.3 }}
            variants={{
              show: { opacity: 1, x: '0' },
              hidden: { opacity: 0, x: '100%' },
            }}
            initial="hidden"
            animate="show"
          />
          <BackgroundImage
            as={motion.div}
            transition={{ delay: 0.3, duration: 0.3 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
    <Title
      as={motion.div}
      transition={{ delay: 0.5, duration: 0.3 }}
      variants={{
        show: { opacity: 1, x: '0' },
        hidden: { opacity: 0, x: '-100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <h1 style={{ color: '#fff', margin: 0, WebkitTextStroke: '1px black' }}>SOLUÇÃO PARA</h1>
      <h1
        style={{
          color: '#fff',
          margin: 0,
          fontSize: 42,
          WebkitTextStroke: '1px black',
        }}
      >
        ENTREGA DE PROJETOS
      </h1>
      <div
        style={{
          backgroundColor: 'green',
          padding: '15px 25px',
          width: 'max-content',
          marginTop: 15,
        }}
      >
        <h2 style={{ margin: 0 }}>CONTRATE FREELANCERS</h2>
      </div>
    </Title>
  </Container>
);

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.4);
`;

const Section = styled.div`
  flex: 1;
  height: 100vh;
  background-color: #000;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  background-image: url(${background});
  background-size: cover;
  filter: grayscale(100%);
`;

const Title = styled.div`
  position: absolute;
  bottom: 15%;
  left: 10%;
`;

export default Home;
