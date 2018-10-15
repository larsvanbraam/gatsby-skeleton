import '../../styles/screen.scss';

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import Header from '../../components/layout/header';
import Wrapper from '../../components/layout/wrapper';

import styles from './IndexLayout.module.scss';

export default class IndexLayout extends Component {
  public render() {
    return (
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
              <Wrapper>{this.props.children}</Wrapper>
            </div>
          );
        }}
      />
    );
  }
}
