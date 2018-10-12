import 'normalize.css';

import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { IndexLayoutProps, IStaticQueryProps } from './IndexLayoutProps';

import Header from '../../components/header/Header';

const IndexLayout: React.SFC<IndexLayoutProps> = ({ children }) => (
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
    render={(data: IStaticQueryProps) => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' },
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        {children}
      </div>
    )}
  />
);

export default IndexLayout;
