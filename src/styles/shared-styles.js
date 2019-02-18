import { css } from 'lit-element';

export const SharedStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  h1, h2, p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`;