import * as React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './about';
import Blog from './blog';
import Home from './home';
import PersonPage from './PersonPage';

class LinkComp extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/person/:personId" element={<PersonPage/>} />
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default LinkComp;
