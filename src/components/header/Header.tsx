import * as React from 'react';
import { Link } from 'gatsby';
import { HeaderProps } from './HeaderProps';

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <header>
    <div>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </div>
  </header>
);

export default Header;
