import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;600&display=swap');

  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  };

  * {
    box-sizing: border-box;
  };

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #1d1d1d;
  };
`

export default GlobalStyles;