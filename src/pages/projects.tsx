import React, { useState } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import ProjectCard from '../components/project-card';
import { Image } from '../interfaces';
import styled from '@emotion/styled';
import Select from 'react-dropdown-select';
import config from '../website-config';
import HelmetDefault from '../components/helmet-default';

const TextSection = styled.div`
  text-align: center;
`;

const SelectContainer = styled.div`
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
`;
interface props {
  location: Location;
  path: string;
  data: {
    allMarkdownRemark: {
      nodes: Array<{
        frontmatter: {
          title: string;
          categories: Array<{
            id: string;
          }>;
          excerpt: string;
          image: Image;
        };
        fields: {
          slug: string;
          primaryCategory: string;
        };
      }>;
    };
    siteBanner: Image;
    allCategoriesYaml: {
      nodes: Array<{
        id: string;
      }>;
    };
  };
}

const ProjectPage: React.FC<props> = props => {
  const title = 'Projects';
  const description = 'You can add projects by adding a markdown file in the content folder :)';
  const pageUrl = `${config.siteUrl}/${props.path}`;

  const allTags = props.data.allCategoriesYaml.nodes.concat([{ id: 'All' }]);
  const { location } = props;
  // @ts-ignore
  const { state = {} } = location;
  const { defaultFilter } = state;
  let defaultValue: { id: string };
  if (defaultFilter) {
    defaultValue = { id: defaultFilter };
  } else {
    defaultValue = { id: 'All' };
  }

  const allPosts = props.data.allMarkdownRemark.nodes;
  const [posts, setPosts] = useState(sortByCategory(defaultValue.id));

  function sortByCategory(sortValue: string) {
    return allPosts.filter(post => {
      if (sortValue === 'All') {
        return true;
      }

      return post.frontmatter.categories.filter(category => category.id === sortValue).length !== 0;
    });
  }

  return (
    <>
      <HelmetDefault title={title} description={description} pageUrl={pageUrl} image={props.data.siteBanner} />
      <Layout>
        <TextSection >
          <h1>{title}</h1>
          <h4>{description}</h4>
          <SelectContainer>
            <Select
              clearable={false}
              values={[defaultValue]}
              options={allTags}
              labelField="id"
              valueField="id"
              onChange={value => setPosts(sortByCategory(value[0].id))}
            />
          </SelectContainer>
        </TextSection>
        {
          posts.length === 0 ?
            <h4 style={{ color: 'grey', fontWeight: 'normal', textAlign: 'center' }}>Nothing registered yet!</h4> :
            posts.map(post => (
              <ProjectCard
                key={post.fields.slug}
                category={post.fields.primaryCategory}
                title={post.frontmatter.title}
                description={post.frontmatter.excerpt}
                slug={post.fields.slug}
                image={post.frontmatter.image.childImageSharp.fluid}
              />
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
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        excerpt
        categories {
          id
        }
        image {
          childImageSharp {
            fluid(maxWidth: 3720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
        primaryCategory
      }
    }
  }
  allCategoriesYaml {
    nodes {
      id
    }
  }
}
`;

export default ProjectPage;
