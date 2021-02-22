import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
    font-size: 16px;
  }

  @media screen and (min-width: 320px) {
  html {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
  }
  @media screen and (min-width: 1000px) {
    html {
      font-size: 22px;
    }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
}`;
