import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${(props) => props.background};
  transition: 0.2s all;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;

  @media screen and (min-width: 0) and (max-width: 670px) {
    padding: 0 30px;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: auto;

  @media screen and (min-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr 0.9fr;
  }
`;
