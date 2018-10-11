import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'normalize.css';

import Header from '../components/header';

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
};

const IndexLayout: React.SFC = ({ children }) => (
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
    render={(data: StaticQueryProps) => (
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