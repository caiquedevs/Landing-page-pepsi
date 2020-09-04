import React from 'react';

import { ArticleRight, SocialArea } from './styled';

import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';

export default function ArticleRightComponent({ image }) {
  return (
    <ArticleRight>
      <img src={image} alt="pepsi" width="260px" />

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
  );
}
