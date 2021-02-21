import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useElementScroll, useTransform } from 'framer-motion';

import background from '../assets/img/3.jpeg';
import { Grid } from '../components/Grid';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useElementScroll(ref);
  const posAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 30]);

  return (
    <Container id="about">
      <Grid.Container>
        <Grid.Row ref={ref} style={{ height: '100vh' }}>
          <Grid.Col
            value={{ xs: 0, md: 6 }}
            padding-left="3rem"
            padding-right="3rem"
            height={{
              xs: '0',
              md: '100vh',
            }}
            display={{
              xs: 'none',
              md: 'flex',
            }}
            alignItems="center"
            justifyContent="center"
          >
            <div style={{ width: '70vh', position: 'relative', backgroundColor: '#212121' }}>
              <motion.img
                style={{
                  maxHeight: '70vh',
                  y: 30,
                  x: 30,
                }}
                src={background}
              />
            </div>
          </Grid.Col>
          <Grid.Col
            value={{
              xs: 12,
              md: 6,
            }}
            padding-left="3rem"
            padding-right="3em"
            height="100vh"
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <div style={{ alignSelf: 'start' }}>
              <h3 style={{ textAlign: 'end', margin: 0 }}>quem somos</h3>
              <h3 style={{ alignSelf: 'start', fontSize: 28, margin: 0 }}>
                BEM VINDO
              </h3>
            </div>
            <p style={{ marginTop: '2em', lineHeight: 1.2 }}>
              A Urbaniza é uma empresa de engenharia e arquitetura focada em
              desenvolvimento de projetos e consultorias, a empresa conta com
              profissionais de alta competência e experiência na área com sólida
              formação acadêmica. O principal foco é desenvolver projetos
              sólidos que superem as expectativas dos clientes quesito
              desempenho conforto e economia.
            </p>
            <p style={{ lineHeight: 1.2 }}>
              A empresa possui uma ampla gama de conhecimentos desenvolvendo
              projetos completos no ramo de edificações, como arquitetônicos,
              estruturais e sistemas hidráulicos e elétricos. A empresa zela
              pela qualidade dos projetos utilizando sempre softwares
              atualizados e compatíveis com a situação de mercado.
            </p>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  background-color: #eee;
  height: 100vh;
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
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

export default About;
