import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: #1c1e1e;
    font-family: 'Iosevka Web', sans-serif;
    font-size: 1.5rem;
    color: #fff;
  }

  a {
    color: #03a98f;
  }
  
  article {
    img {
      width: 100%;
    }

    video {
      width: 100%;
    }
  }

  li {
    list-style-type: square;
  }

  @font-face {
    font-family: 'Iosevka Web';
    font-display: swap;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    src: url('/fonts/ttf/iosevka-regular.ttf') format('truetype'),
      url('fonts/woff2/iosevka-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Iosevka Web';
    font-display: swap;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    src: url('/fonts/ttf/iosevka-medium.ttf') format('truetype'),
      url('/fonts/woff2/iosevka-medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Iosevka Web';
    font-display: swap;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    src: url('/fonts/ttf/iosevka-bold.ttf') format('truetype'),
      url('/fonts/woff2/iosevka-bold.woff2') format('woff2');
  }
`;

export default GlobalStyles;
