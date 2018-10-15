import React from 'react';
import classNames from 'classnames';
import IndexLayout from '../../layouts/index';
import PageLayout from '../../layouts/page';
import PrimaryButton from '../../components/general/button/primary-button';

import styles from './About.module.scss';
import { FormattedMessage } from 'react-intl';

const AboutPage = ({ pathContext: { locale } }) => (
  <IndexLayout locale={locale}>
    <PageLayout>
      <h1 className={classNames('heading-01', styles.heading)}>
        <FormattedMessage id="about.heading" />
      </h1>
      <p className={classNames('copy-01', styles.copy)}>
        <FormattedMessage id="about.copy" />
      </p>
      <PrimaryButton to="/">Home</PrimaryButton>
    </PageLayout>
  </IndexLayout>
);

export default AboutPage;
