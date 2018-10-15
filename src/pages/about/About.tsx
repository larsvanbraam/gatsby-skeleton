import React from 'react';
import classNames from 'classnames';
import IndexLayout from '../../layouts/index';
import PageLayout from '../../layouts/page';
import PrimaryButton from '../../components/general/button/primary-button';

import styles from './About.module.scss';

const AboutPage = () => (
  <IndexLayout>
    <PageLayout>
      <h1 className={classNames('heading-01', styles.heading)}>Hi from the second page</h1>
      <p className={classNames('copy-01', styles.copy)}>Welcome to page 2</p>
      <PrimaryButton to="/">Home</PrimaryButton>
    </PageLayout>
  </IndexLayout>
);

export default AboutPage;
