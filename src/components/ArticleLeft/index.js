import React from 'react';
import { ArticleLeft } from './styled';

export default function ArticleLeftComponent() {
  return (
    <ArticleLeft>
      <h1>
        That's what <br />
        <strong>I like</strong>
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <button type="button">View All Products</button>
    </ArticleLeft>
  );
}
