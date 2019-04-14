import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/decks/'>Decks</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/stats'>Stats</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/sync'>Sync</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;