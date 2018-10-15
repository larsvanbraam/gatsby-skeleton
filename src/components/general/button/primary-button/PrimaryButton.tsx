import * as React from 'react';
import styles from './PrimaryButton.module.scss';
import classNames from 'classnames';
import LocalizedLink from '../../util/localized-link';

const PrimaryButton: React.SFC<{ to: any }> = ({ to, children }) => (
  <LocalizedLink className={classNames('copy-01', styles.button)} to={to}>
    {children}
  </LocalizedLink>
);

export default PrimaryButton;
