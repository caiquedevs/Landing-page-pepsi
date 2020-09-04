import React from 'react';

import { Footer } from './styled';
import { blue, red, black } from '../../styles/colors';

import pepsi01 from '../../assets/pepsi01.png';
import pepsi02 from '../../assets/pepsi02.png';
import pepsi03 from '../../assets/pepsi03.png';

export default function FooterComponent({ handleClick }) {
  return (
    <Footer>
      <ul>
        <li>
          <button onClick={() => handleClick(pepsi01, blue)} type="button">
            <img src={pepsi01} alt="pepsi" width="40px" />
          </button>
        </li>
        <li>
          <button onClick={() => handleClick(pepsi02, red)} type="button">
            <img src={pepsi02} alt="pepsi" width="40px" />
          </button>
        </li>
        <li>
          <button onClick={() => handleClick(pepsi03, black)} type="button">
            <img src={pepsi03} alt="pepsi" width="40px" />
          </button>
        </li>
      </ul>
    </Footer>
  );
}
