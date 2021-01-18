import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --fz-lg: 16px;
    --fz-xl: 18px;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    font-size: var(--fz-lg);
    line-height: 1.3;
    overflow-x: hidden;
  }

  a {
    color: #000000;
  }

  header, main {
    margin: 0 auto;
    max-width: 1300px;
    padding: 0 25px;
    background-color: ${({ theme }) => theme.colors.background};
  }

  section {
    margin-bottom: 3em;
  }

  h1, h2, h3 {
    margin: 0;
  }

  h2 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    margin-bottom: 1rem;
  }
`

export default GlobalStyle
