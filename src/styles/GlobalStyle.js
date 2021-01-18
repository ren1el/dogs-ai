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
    font-family: -apple-system, 
        BlinkMacSystemFont, 
        "Segoe UI", 
        Roboto, 
        Oxygen-Sans,    
        Ubuntu, 
        Cantarell, 
        "Helvetica Neue", 
        sans-serif;
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
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
  }

  main {
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 0 25px;
    }
  }

  section {
    margin-bottom: 3em;
  }

  h1, h2, h3 {
    margin: 0;
  }

  .btn {
    text-decoration: none;
    background-color: #ffffff;
    border: none;
    padding: 0.5em 1em;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 1rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
    cursor: pointer;
  }

  @keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(10deg);
  }
  40% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
`

export default GlobalStyle
