import React from 'react';
import Layout from '../components/layout';
import CategoryCard from '../components/category-card';
import { graphql } from 'gatsby';
import { Image } from '../interfaces';
import styled from '@emotion/styled';
import config from '../website-config';
import HelmetDefault from '../components/helmet-default';

interface Props {
  path: string;
  data: {
    allCategoriesYaml: {
      nodes: Array<{
        id: string;
        description: string;
        image: Image;
      }>;
    };
    siteBanner: Image;
  };
}

const TextSection = styled.div`
  text-align: center;
`;

const SupportedCausesPage: React.FC<Props> = props => {
  const title = 'Categories';
  const description = 'Different categories of projects.';
  const categories = props.data.allCategoriesYaml.nodes;
  const pageUrl = `${config.siteUrl}/${props.path}`;
  return (
    <>
      <HelmetDefault title={title} description={description} image={props.data.siteBanner} pageUrl={pageUrl} />
      <Layout>
        <TextSection>
          <h1>{ title }</h1>
          <p>{description}</p>
        </TextSection>
        {
          categories.map(category => (
            <CategoryCard
              key={category.id}
              title={category.id}
              description={category.description}
              image={category.image.childImageSharp.fluid}
              link="https://google.com"/>
          ))
        }
      </Layout>
    </>
  );
};

export const query = graphql`
query {
  siteBanner: file(relativePath: { eq: "assets/cover-card.png" }) {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
  allCategoriesYaml {
    nodes {
      id
      description
      image {
        childImageSharp {
          fluid(maxWidth: 3720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`;

export default SupportedCausesPage;
