import styled from 'styled-components';

export const Feature = styled.section`
  display: flex;
  padding: 16px 0 64px;

  h2 {
    margin: -8px 0 0.2em;
  }
`;

export const FeatureIcon = styled.div`
  width: 110px;
  margin-right: 32px;

  @media (min-width: 768px) {
    width: 160px;
  }
`;

export const FeatureImg = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

export const FeatureContent = styled.div`
  flex: 1;
`;

export const FeatureMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  font-size: 80%;
`;
