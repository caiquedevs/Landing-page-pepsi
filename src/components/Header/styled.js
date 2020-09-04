import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Header = styled.header`
  width: 100%;
  height: min-content;
  padding: 20px 0;

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

  @media screen and (min-width: 1080px) {
    margin-bottom: 35px;
  }

  @media screen and (min-width: 670px) and (max-width: 810px) {
    margin-bottom: 30px;

    ul {
      display: none;
    }
  }

  @media screen and (min-width: 0) and (max-width: 670px) {
    ul {
      display: none;
    }
  }
`;
