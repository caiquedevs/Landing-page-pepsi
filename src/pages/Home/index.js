import React, { useState } from 'react';

import { Main, Container, Section } from './styled';
import { blue } from '../../styles/colors';

import Header from '../../components/Header';
import ArticleRight from '../../components/ArticleRight';
import ArticleLeft from '../../components/ArticleLeft';
import Footer from '../../components/Footer';

import pepsi01 from '../../assets/pepsi01.png';

export default function HomePage() {
  const [imageActive, setImageActive] = useState({
    image: pepsi01,
    background: blue,
  });

  const handleClickChangeImageActive = (image, background) => {
    setImageActive({ image, background });
  };

  return (
    <Main background={imageActive.background}>
      <Container>
        <Header />

        <Section>
          <ArticleLeft />
          <ArticleRight image={imageActive.image} />
        </Section>

        <Footer handleClick={handleClickChangeImageActive} />
      </Container>
    </Main>
  );
}
