import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import Wrapper from '../wrapper';
import styles from './Header.module.scss';
import localeConfig from '../../../../locale-config';

const Header: React.SFC<{ title: string }> = ({ title }) => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.innerWrapper}>
          <h1>{title}</h1>
          <nav className={styles.languageSelector}>
            {Object.keys(localeConfig).map(key => (
              <Link
                className={classNames('copy-01', styles.link)}
                to={`${localeConfig[key].default ? '/' : key}/`}
                key={key}
              >
                {key}
              </Link>
            ))}
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
