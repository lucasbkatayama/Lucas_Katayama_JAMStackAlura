import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Item } from '../temp/Item';
import { List } from '../temp/List';
import { Grid } from '../components/Grid';

function Store({ selectedId, setSelectedId }) {
  const imageHasLoaded = true;

  return (
    <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
      <List selectedId={selectedId} setSelectedId={setSelectedId} />
      <AnimatePresence>
        {selectedId && imageHasLoaded && <Item id={selectedId} setSelectedId={setSelectedId} key="item" />}
      </AnimatePresence>
    </div>
  );
}

const Works = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Container id="works">
      <div style={{ width: 'fit-content' }}>
        <h1 style={{ marginTop: '5rem', marginBottom: 0 }}>NOSSOS TRABALHOS</h1>
        <h3 style={{ margin: 0, textAlign: 'end', marginBottom: '2rem' }}>portifolio</h3>
      </div>

      <AnimateSharedLayout type="crossfade">
        <Store selectedId={selectedId} setSelectedId={setSelectedId} />
      </AnimateSharedLayout>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.4);
  z-index: 1;
`;

export default Works;
