import React from 'react';
import styled from 'styled-components';

import profile from '../assets/img/client.jpg';
import quotation from '../assets/img/quotation-mark.svg';
import { Grid } from '../components/Grid';

const Review = () => (
  <Container id="reviews">
    <div style={{ width: 'fit-content', marginTop: '5rem' }}>
      <h3
        style={{
          marginTop: '5rem',
          margin: 0,
          textAlign: 'start',
          marginBottom: 0,
        }}
      >
        avaliações de
      </h3>
      <h1 style={{ marginTop: 0, marginBottom: '4rem' }}>NOSSOS CLIENTES</h1>
    </div>
    <ReviewContainer>
      <ReviewContainer.Inner>
        <p>
          "Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
        <p>
          five centuries, but also the leap into electronic typesetting,"
        </p>
      </ReviewContainer.Inner>
      <div style={{ position: 'absolute', right: 0, top: '20%' }}>
        <Card>
          <Image src={profile} />
        </Card>
        <b style={{ fontSize: 20 }}>Jorge the guy</b>
      </div>
      <Quotation src={quotation} />
    </ReviewContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5rem;
  background-color: #eee;
  flex-direction: column;
  height: 100vh;
`;

const ReviewContainer = styled.div`
  height: 50%;
  width: 50%;
  position: relative;
  @media(max-width: 768px) {
    width: 90%
  }
`;

ReviewContainer.Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  background-color: white;
  border-radius: 4px;
  padding: 5rem;
  padding-right: 8rem;
  flex-direction: column;
  color: #444;
`;

const Card = styled.div`
  position: relative;
  background-color: red;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 5px;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.4);
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
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

const Quotation = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 8%;
  top: -20px;
`;

export default Review;
