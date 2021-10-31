import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/Poppins-Regular.ttf') format('truetype');
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: Poppins;
  }
`