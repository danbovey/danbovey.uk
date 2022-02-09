import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
  // HACK: To wrap the margins of headings
  padding: 2px 32px;

  @media (min-width: 910px) {
    &:before,
    &:after {
      content: '';
    }
  }

  &:before,
  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-image: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(255, 255, 255, 0.1) 50%
    );
    background-repeat: repeat;
    background-size: 100% 20px;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: -1px;
  }
`;
