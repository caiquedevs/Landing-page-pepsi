import React from 'react';

import { Header } from './styled';
import logo from '../../assets/logo.png';

export default function index() {
  return (
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
  );
}
