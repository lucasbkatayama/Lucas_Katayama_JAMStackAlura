import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import arrow from '../../assets/img/chevron-up.svg';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Container>
      {isVisible
        && (
        <div onClick={scrollToTop}>
          <img src={arrow} alt="Go to top" style={{ width: 45 }} />
        </div>
        )}
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 1.5rem;
  animation: fadeIn 700ms ease-in-out 1s both;
  cursor: pointer;
  z-index: 1000
`;
