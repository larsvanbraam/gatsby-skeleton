import React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import IndexLayout from '../layouts/index';
import PageLayout from '../layouts/page';
import PrimaryButton from '../components/general/button/primary-button';

import style from './Home.module.scss';

const Index = ({ pathContext: { locale } }) => {
  return (
    <IndexLayout locale={locale}>
      <PageLayout>
        <h1 className={classNames('heading-01', style.heading)}>
          <FormattedMessage id="home.heading" />
        </h1>
        <p className={classNames('copy-01', style.copy)}>
          <FormattedMessage id="home.copy" />
        </p>
        <PrimaryButton to="/about">About page</PrimaryButton>
      </PageLayout>
    </IndexLayout>
  );
};

export default Index;
