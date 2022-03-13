import styled from 'styled-components';

export const Stat = styled.div`
  position: relative;
  transition: background 0.2s ease-in-out;

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
