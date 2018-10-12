import '../../styles/screen.scss';

import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../../components/layout/header/Header';
import Wrapper from '../../components/layout/wrapper/Wrapper';

interface IStaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

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
        <Wrapper>{children}</Wrapper>
      </div>
    )}
  />
);

export default IndexLayout;
