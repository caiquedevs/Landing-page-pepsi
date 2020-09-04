import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  padding-bottom: 30px;
  margin-top: 65px;

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

  @media screen and (min-width: 1080px) {
    margin-top: 0;
  }

  @media screen and (min-width: 670px) and (max-width: 810px) {
  }
`;
