import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;

    background-color: var(--primary);
    color: var(--text-primary);

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--secondary);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--primary);
    }
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);

    --text-primary: #fff;
    --text-secondary: #8a8c90;
    --text-info: #5d80d6;
    --text-warning: #f9a839;
    --text-danger: #f84a4b; 
  }
`;

/* Small devices (landscape phones, 576px and up) */
// @media (min-width: 576px) {}

/* Medium devices (tablets, 768px and up) */
// @media (min-width: 768px) {}

/* Large devices (desktops, 992px and up) */
// @media (min-width: 992px) {}

/* Extra large devices (large desktops, 1200px and up) */
// @media (min-width: 1200px) {}
