import React from 'react';
import IndexLayout from '../layouts/index';
import classNames from 'classnames';
import PageLayout from '../layouts/page';
import PrimaryButton from '../components/general/button/primary-button';

import style from './Home.module.scss';

const Index = () => (
  <IndexLayout>
    <PageLayout>
      <h1 className={classNames('heading-01', style.heading)}>Hi people</h1>
      <p className={classNames('copy-01', style.copy)}>Welcome to your new Gatsby site.</p>
      <PrimaryButton to="/about">About page</PrimaryButton>
    </PageLayout>
  </IndexLayout>
);

export default Index;
