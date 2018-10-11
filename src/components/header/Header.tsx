import * as React from 'react';
import { Link } from 'gatsby';
import { HeaderProps } from './HeaderProps';
import styles from './HeaderStyles';

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <header className={styles.header}>
    <div className={styles.innerHeader}>
      <h1>
        <Link to="/" className={styles.link}>
          {title}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
