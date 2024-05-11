import * as React from 'react';
import { useState } from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';

const Navbar = () => {

  return (
 <nav>
      <BrowserRouter>
      <ul>
        <li>
          <NavLink
            to="message">
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="task"
          >
            Tasks
          </NavLink>
        </li>
      </ul>
      </BrowserRouter>
    </nav>
  
  );
};

export default Navbar;
