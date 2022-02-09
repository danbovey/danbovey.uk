import styled from 'styled-components';

export const Stat = styled.div`
  position: relative;
  transition: background 0.2s ease-in-out;

  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.02);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  small {
    display: block;
    margin-top: -4px;
  }
`;

export const StatGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px 32px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StatMetric = styled.div`
  font-size: 3rem;
  color: #03a98f;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const StatPopover = styled.div`
  opacity: ${props => (props.isOpen ? 1 : 0)};
  pointer-events: ${props => (props.isOpen ? 'initial' : 'none')};
  transform: scale(${props => (props.isOpen ? 1 : 0.95)});
  position: absolute;
  top: -16px;
  right: -16px;
  left: -16px;
  bottom: -16px;
  z-index: 10;
  padding: 16px;
  background: #1c1e1e;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  font-size: 80%;
  will-change: transform, opacity;
  transition: transform 0.2s, opacity 0.5s;
`;
