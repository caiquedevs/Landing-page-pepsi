import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const ArticleLeft = styled.article`
  width: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 4em;
    line-height: 1.5em;
    font-weight: 900;
    color: ${colors.white};
    text-transform: uppercase;
  }

  h1 strong {
    color: ${colors.white};
    font-size: 2em;
    text-transform: uppercase;
  }

  p {
    color: ${colors.white};
    font-weight: 500;
  }

  button {
    margin-top: 20px;
    padding: 8px 20px;

    background: ${colors.white};
    border: none;
    border-radius: 40px;
    font-weight: 500;
    font-size: 1em;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    color: #111;
    outline: none;
    transition: 0.2s;
    cursor: pointer;

    :hover {
      filter: brightness(0.9);
    }
  }

  @media screen and (min-width: 1080px) {
    padding-top: 30px;

    button:hover {
      transform: translateY(-5px);
    }
  }

  @media screen and (min-width: 0) and (max-width: 670px) {
    align-items: center;

    h1 {
      font-size: 2.5em;
    }

    p {
      display: none;
    }

    button {
      margin-left: -70px;
    }
  }
`;
