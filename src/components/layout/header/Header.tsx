import React from 'react';
import Wrapper from '../wrapper';

import styles from './Header.module.scss';

const Header: React.SFC<{ title: string }> = ({ title }) => (
  <header className={styles.header}>
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  </header>
);

export default Header;
