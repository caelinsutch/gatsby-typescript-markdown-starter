import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import colors from '../styles/colors';
import dimensions from '../styles/dimensions';
import styled from '@emotion/styled';
import { graphql, Link, StaticQuery } from 'gatsby';
import config from '../website-config';
import HelmetDefault from '../components/helmet-default';

const Banner = styled.div`
    padding-top: 2.5em;
    padding-bottom: 3em;
    max-width: 830px;

    @media(max-width:${dimensions.maxwidthMobile}px) {
       margin-bottom: 3em;
    }

    h1 {
        margin-bottom: 1em;
        font-weight: bold;

        a {
            text-decoration: none;
            transition: all 100ms ease-in-out;

            &:nth-of-type(1) { color: ${colors.blue500}; }
            &:nth-of-type(2) { color: ${colors.orange500}; }
            &:nth-of-type(3) { color: ${colors.purple500}; }
            &:nth-of-type(4) { color: ${colors.green500}; }
            &:nth-of-type(5) { color: ${colors.teal500}; }

            &:hover {
                cursor: pointer;
                transition: all 100ms ease-in-out;

                &:nth-of-type(1) { color: ${colors.blue600};    background-color: ${colors.blue200};}
                &:nth-of-type(2) { color: ${colors.orange600};  background-color: ${colors.orange200};}
                &:nth-of-type(3) { color: ${colors.purple600};  background-color: ${colors.purple200};}
                &:nth-of-type(4) { color: ${colors.green600};   background-color: ${colors.green200};}
                &:nth-of-type(5) { color: ${colors.teal600};    background-color: ${colors.teal200};}

            }
        }
    }
`;

const IndexLayout: React.FC = () => {
  const { description, title } = config;
  return (
    <StaticQuery
      query={graphql`
        query {
          siteBanner: file(relativePath: { eq: "assets/cover-card.png" }) {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
    `}
      render={data => (
        <>
          <HelmetDefault title={title} description={description} image={data.siteBanner}>
            <html lang={config.lang} />
          </HelmetDefault>
          <Layout>
            <Helmet/>
            <Banner>
              <h1>
                This is a fun portolio to showcase your <Link to="/projects">projects </Link> and other things about you with the <a href="https://opensource.org/osd"> open source </a> framework <a href="https://www.gatsbyjs.org/">GatsbyJS</a>.
              </h1>
            </Banner>
            <section>
              <h2>Minimal Design</h2>
              <p>We recognize that the use of technology can either hurt or help any movement towards justice and peace. By harnessing the power of the internet,
                technology can make social movements explode, and empower more people to do what is right. OSCR exists to unify open source developers to create and maintain
                software applications that help social justice causes, from LGTBQ rights to the BLM movement.
              </p>
              <h2>Easily Customized</h2>
              <p>
                Checkout the <a href="https://github.com/caelinsutch/gatsby-typescript-markdown-starter">Github</a> for more information on how to customize this project.
              </p>
              <h2>Credits</h2>
              <p>
                Built by <a href="https://caelinsutch.com">Caelin Sutch</a>. Follow him on <a href="https://twitter.com/caelin_sutch">Twitter</a>
              </p>
            </section>
          </Layout>
        </>
      )}
    />
  );
};

export default IndexLayout;
