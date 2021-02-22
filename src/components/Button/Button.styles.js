import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  border: 0;
  text-transform: uppercase;
  cursor: pointer;
  line-height 1.25;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  background-color: transparent;
  color: ${({ type }) => (type === 'black' ? 'black' : 'white')};
  &:after {
    display:block;
    content: '';
    border-bottom: ${({ theme }) =>
      `solid 3px ${theme.colors.primary.main.color}`};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after { transform: scaleX(1); }
  &:after{  transform-origin:  0% 50%; }
`;
