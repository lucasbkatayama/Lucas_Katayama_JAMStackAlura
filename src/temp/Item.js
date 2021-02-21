import React from 'react';
import { motion } from 'framer-motion';
import { items } from './data';
import picture from '../assets/img/a.jpg';

export function Item({ id, setSelectedId }) {
  const { category, title } = items.find((item) => item.id === id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className="overlay"
        onClick={() => setSelectedId(null)}
      />
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <button onClick={() => setSelectedId(null)}>close</button>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={picture} alt="" style={{ width: '100%' }} />
          </motion.div>
          <motion.div className="content-container" animate>
            <p>asdasdsadasdas</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
