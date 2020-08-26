import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems, { edge: 'right' });
  });

  return (
    <Fragment>
      <nav className='z-depth-0'>
        <div className='nav-wrapper'>
          <a href='/' className='brand'>
            Weptile<span>Heros</span>
          </a>
          <a
            href='#!'
            data-target='slide-out'
            className='right sidenav-trigger'
          >
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
