import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Main = styled.main`
  width: 100%;
  max-width: 1366px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 100px;

  background-color: ${(props) => props.background};
  transition: 0.2s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;

  @media screen and (min-width: 1080px) {
  }
`;

export const Header = styled.header`
  width: 100%;
  height: min-content;
  padding: 20px 0;
  margin-bottom: 35px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    width: auto;
    height: auto;
    display: flex;
    list-style: none;
  }

  ul li {
    padding-left: 40px;

    font-weight: 500;
    color: ${colors.white};
    transition: 0.5s;
    cursor: pointer;

    :hover {
      transform: translateY(-5px);
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: 1fr 0.9fr;
`;

export const ArticleLeft = styled.article`
  width: auto;
  padding-top: 30px;

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
  }
`;

export const ArticleRight = styled.article`
  width: auto;
  padding: 0 50px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SocialArea = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  list-style: none;

  li {
    filter: invert(1);
    padding: 5px 0;
    transform: scale(0.6);

    cursor: pointer;
  }

  li img {
    max-width: 40px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  padding-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
  }

  ul li button {
    padding: 0 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.5s;

    :hover {
      transform: translateY(-15px);
    }
  }
`;
