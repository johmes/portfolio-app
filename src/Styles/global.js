import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  a {
    font-size: ${({ theme }) => theme.smallTextFont};
    text-decoration: none;
    letter-spacing: .05rem;
    color: ${({ theme }) => theme.colorSecondary};
  }

  a:hover {
      transition: all .3s linear;
      color: ${({ theme }) => theme.colorPrimary};
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }

  .Header-highlight {
    color: ${({ theme }) => theme.colorSecondary};
  }

  .Greeting-text {
    margin: 0;
    font-size: ${({ theme }) => theme.mediumTextFont};
  }

  .Slogan-text {
    font-style: italic;
    color: ${({ theme }) => theme.colorAccent};
    font-size: ${({ theme }) => theme.smallTextFont};
  }

  .Bottom-shadow {
    width: 100%;
    height: 7rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: transparent;
    -moz-box-shadow: inset 0 5px 5px ${({ theme }) => theme.primaryDark});
    -webkit-box-shadow: inset 0 5px 5px ${({ theme }) => theme.primaryDark};
    box-shadow: inset 0rem -6rem 3rem -3em ${({ theme }) => theme.primaryDark};
    z-index: 9;
  }

  div {
    text-align: center;
  }

  small {
    display: block;
  }

  form {
    margin: 0 auto;
    max-width: 50vh;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 1rem;
    letter-spacing: .05em;
  }

  .form-control {
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 8px;
    margin: 1.2rem 0 0 0;
  }

  textarea {
    resize: none;
  }

  .Max-lenght {
    text-align: right;
    margin-top: .2rem;
    font-size: ${({ theme }) => theme.smallTextFont};
    color: ${({ theme }) => theme.textColorTertiary};
  }

  .Submit-status {
    color: ${({ theme }) => theme.textColorPrimary};
  }

  .Submit-status.Success {
    color: green;
  }

  .Submit-status.Failed {
    color: ${({ theme }) => theme.colorWarning};
  }

  .Content-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    padding: 3rem 6rem;
    margin 0 auto;
    box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.shadowWhite};

    @media (max-width: ${({ theme }) => theme.tablet}) {
      padding: 4rem 3rem;
    }
  
  }

  .Content-area .Inner {
    margin: 0 auto;
    width: 50%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }
  }

  .Content-area .Inner p {
    margin: 0 auto;
    text-align: center;
    width: 60%;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      width: 100%;
    }
  }

  .Content-area .Inner ul {
    margin: 0 auto;
    width: 50vh;
    list-style-position: outside;
    list-style-type: "🔹";

    @media (max-width: ${({ theme }) => theme.tablet}) {
      width: 100%;
    }
  }

  .Content-area .Inner li {
    margin: 1.2rem auto;
    list-decoration
  }

  .Content-area.dark {
    background-color: ${({ theme }) => theme.primaryDark};
  }

  .Content-area.light {
    background-color: ${({ theme }) => theme.secondaryDark};
  }

  .Content-area.landing-area {
    box-shadow: none;
    min-height: calc(100vh - 5rem);
  }


  .Content-area h1, h2, h3 {
    margin-top: .3rem;
    margin-bottom: 1.5rem;
    font-weight: ${({ theme }) => theme.fontThick};
  }

  .Content-area p {
    color: ${({ theme }) => theme.textColorSecondary};
  }

  .Content-area h1 {
    font-size: ${({ theme }) => theme.headerTextFont};
  }

  .Content-area h2 {
    font-size: ${({ theme }) => theme.largeTextFont};
  }

  .Content-area h3 {
    font-size: ${({ theme }) => theme.mediumTextFont};
  }

  .Emoji-header-icon {
    font-size: ${({ theme }) => theme.largeTextFont};
  }

  #about h3 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: ${({ theme }) => theme.mediumTextFont};
  }
  
  .Content-table {
    width: 100%;
    text-align: center;
    margin: 1.2rem auto;
    display: display-block;
  }

  .Content-table td {
    width: 33.3%;
    font-weight: ${({ theme }) => theme.fontThick};
    color: ${({ theme }) => theme.textColorPrimary};
    padding: 0.6rem;
    display: inline-block;
    vertical-align: middle;
    line-height: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  .Content-table tr {
    margin-bottom: 1.2rem;
  }

  #skills h3 {
    margin-top: 1.6rem;
    margin-bottom: 0;
    font-weight: ${({ theme }) => theme.fontThick};
    font-size: ${({ theme }) => theme.mediumTextFont};
    color: ${({ theme }) => theme.colorPrimary};
  }

  .Content-sneakpeek {
    position: relative;
    top: 4rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      top: 1.5rem;
    }
  }
  .Content-sneakpeek p {
    font-weight: ${({ theme }) => theme.fontThin};
    color: ${({ theme }) => theme.textColorSecondary};
  }
  .subHeader {
    font-size: ${({ theme }) => theme.largeTextFont};
    font-weight: ${({ theme }) => theme.fontMedium};
    color: ${({ theme }) => theme.textColorPrimary};
  }
  .readMoreText {
    width: 8rem;
    margin: 0 auto;
  }
`