import styled from 'styled-components';

export const ArticleRight = styled.article`
  width: auto;
  padding: 0 50px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  > img {
    display: none;
  }

  @media screen and (min-width: 1080px) {
    img {
      display: block;
    }
  }
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

  @media screen and (min-width: 0) and (max-width: 670px) {
    flex-direction: row;
    top: 40px;
    right: 0px;
    transform: translateX(-50%);

    li {
      padding: 0 5px;
    }
  }
`;
