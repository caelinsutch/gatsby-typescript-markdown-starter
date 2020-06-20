import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import {
  CardContainer,
  ProjectCardAction, CardBlurb,
  CardCategories,
  CardContent,
  CardTitle,
} from './styles/card';

interface props {
  category: string;
  title: string;
  description: string;
  slug: string;
  image?: FluidObject;
}

const ProjectCard: React.FC<props> = ({ category, title, description, slug, image }) => {
  return (
    <CardContainer to={slug}>
      <CardContent className="ProjectCardContent">
        <CardCategories>
          {category}
        </CardCategories>
        <CardTitle>
          {title}
        </CardTitle>
        <CardBlurb>
          {description}
        </CardBlurb>
        <ProjectCardAction className="ProjectCardAction">
          Details <span>&#8594;</span>
        </ProjectCardAction>
      </CardContent>
      {
        image ?
          <Img fluid={image} alt="Post Image"/> :
          null
      }
    </CardContainer>
  );
};

export default ProjectCard;
