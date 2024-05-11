import * as React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div>
    Home Component
    <ul>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
);

export default Home;