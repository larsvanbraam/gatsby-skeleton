import '../../styles/screen.scss';

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import { graphql, StaticQuery } from 'gatsby';
import Header from '../../components/layout/header';
import Wrapper from '../../components/layout/wrapper';

// Locale data
import enData from 'react-intl/locale-data/en';
import nlData from 'react-intl/locale-data/nl';

// Translations
const en = require('../../locale/en.json');
const nl = require('../../locale/nl.json');

import styles from './IndexLayout.module.scss';

const messages = { en, nl };

addLocaleData([...enData, ...nlData]);

export default class IndexLayout extends Component<{ locale: string }> {
  public render() {
    const { locale, children } = this.props;
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <StaticQuery
          query={graphql`
            query IndexLayoutQuery {
              site {
                siteMetadata {
                  title
                  description
                }
              }
            }
          `}
          render={({ site }) => {
            const { title, description, keywords } = site.siteMetadata;
            return (
              <div className={styles.wrapper}>
                <Helmet
                  title={title}
                  meta={[
                    { name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                  ]}
                />
                <Header title={title} />
                <Wrapper>{children}</Wrapper>
              </div>
            );
          }}
        />
      </IntlProvider>
    );
  }
}
