import React from 'react';

import styles from './Wrapper.module.scss';

const Wrapper: React.SFC = ({ children }) => <div className={styles.wrapper}>{children}</div>;

export default Wrapper;
