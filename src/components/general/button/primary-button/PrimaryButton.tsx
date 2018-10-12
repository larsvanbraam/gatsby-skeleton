import * as React from 'react';
import { Link } from 'gatsby';
import styles from './PrimaryButton.module.scss';
import classNames from 'classnames';

const PrimaryButton: React.SFC<{ to: any }> = ({ to, children }) => (
  <Link className={classNames('copy-01', styles.button)} to={to}>
    {children}
  </Link>
);

export default PrimaryButton;
