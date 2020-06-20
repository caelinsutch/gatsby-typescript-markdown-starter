import React from 'react';
import Layout from '../components/layout';
import { graphql, StaticQuery } from 'gatsby';
import config from '../website-config';
import HelmetDefault from '../components/helmet-default';

const AboutPage: React.FC<any> = () => (
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
    render={data => {
      const title = 'About Us';
      const description = 'About this website.';
      const pageUrl = `${config.siteUrl}/about`;
      return (
        <>
          <HelmetDefault title={title} description={description} pageUrl={pageUrl} image={data.siteBanner} />
          <Layout>
            <h1>About</h1>
            <p>
              Spicy jalapeno bacon ipsum dolor amet short ribs beef ribs burgdoggen chuck landjaeger swine brisket ham meatloaf kevin doner bacon. Sirloin flank beef ribs, tenderloin landjaeger pork loin turkey strip steak prosciutto. Ball tip pancetta fatback alcatra. Kielbasa tongue pancetta sausage chislic pig cupim pork chop alcatra tenderloin turducken spare ribs. Pork loin drumstick salami venison, andouille boudin ham rump beef ribs chicken bacon biltong pork chop. Ham sausage short loin doner kevin.
            </p>
            <p>
              Cow ground round salami turducken bacon meatloaf chislic meatball andouille. Fatback sirloin prosciutto hamburger pork chop. Tenderloin cow swine flank ribeye, pork chop jowl doner biltong sirloin rump t-bone venison fatback. Shoulder buffalo alcatra, chuck brisket t-bone rump sirloin burgdoggen turducken beef ribs cow tongue. Beef ribs picanha rump venison, t-bone ham beef chuck. Buffalo frankfurter pork chop cow, flank spare ribs chislic ham hock tri-tip ground round short loin.
            </p>
            <p>
              Sausage flank buffalo pork strip steak meatloaf porchetta. Pork chop meatball tail alcatra meatloaf. Pork chop swine meatloaf buffalo. Ball tip tongue tri-tip shank biltong prosciutto.
            </p>
          </Layout>
        </>
      );
    }}
  />
);

export default AboutPage;
