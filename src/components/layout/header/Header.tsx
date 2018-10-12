import React from 'react';

import styles from './Header.module.scss';
import Wrapper from '../wrapper/Wrapper';

const Header: React.SFC<{ title: string }> = ({ title }) => (
  <header className={styles.header}>
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  </header>
);

export default Header;
