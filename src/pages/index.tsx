import React from 'react';
import IndexLayout from '../layouts/index/IndexLayout';
import classNames from 'classnames';
import style from './index.module.scss';
import PageLayout from '../layouts/page/PageLayout';
import PrimaryButton from '../components/general/button/primary-button/PrimaryButton';

const IndexPage = () => (
  <IndexLayout>
    <PageLayout>
      <h1 className={classNames('heading-01', style.heading)}>Hi people</h1>
      <p className={classNames('copy-01', style.copy)}>Welcome to your new Gatsby site.</p>
      <PrimaryButton to="/about">About page</PrimaryButton>
    </PageLayout>
  </IndexLayout>
);

export default IndexPage;
