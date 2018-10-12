import '../../styles/screen.scss';

import * as React from 'react';
import styles from './PageLayout.module.scss';

const PageLayout: React.SFC = ({ children }) => <div className={styles.page}>{children}</div>;

export default PageLayout;
