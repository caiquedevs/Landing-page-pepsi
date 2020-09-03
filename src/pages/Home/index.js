import React, { useState } from 'react';
import { blue, red, black } from '../../styles/colors';
import {
  Main,
  Header,
  Section,
  ArticleLeft,
  ArticleRight,
  SocialArea,
  Footer,
} from './styled';

import logo from '../../assets/logo.png';
import pepsi01 from '../../assets/pepsi01.png';
import pepsi02 from '../../assets/pepsi02.png';
import pepsi03 from '../../assets/pepsi03.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';

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
      <Header>
        <img src={logo} alt="logo" width="80px" />
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>What's New</li>
          <li>Newsletter</li>
          <li>Contact</li>
        </ul>
      </Header>

      <Section>
        <ArticleLeft>
          <h1>
            That's what <br />
            <strong>I like</strong>
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button type="button">View All Products</button>
        </ArticleLeft>

        <ArticleRight>
          <img src={imageActive.image} alt="pepsi" width="260px" />

          <SocialArea>
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
          </SocialArea>
        </ArticleRight>
      </Section>

      <Footer>
        <ul>
          <li>
            <button
              onClick={() => handleClickChangeImageActive(pepsi01, blue)}
              type="button"
            >
              <img src={pepsi01} alt="pepsi" width="40px" />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClickChangeImageActive(pepsi02, red)}
              type="button"
            >
              <img src={pepsi02} alt="pepsi" width="40px" />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClickChangeImageActive(pepsi03, black)}
              type="button"
            >
              <img src={pepsi03} alt="pepsi" width="40px" />
            </button>
          </li>
        </ul>
      </Footer>
    </Main>
  );
}
