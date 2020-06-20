import React from 'react';
import Layout from '../components/layout';
import HelmetDefault from '../components/helmet-default';

const notFoundPage: React.FC<any> = () => {
  const pageTitle = 'You got lost!';
  const pageDescription = 'This is a dead link :(. Hope you find what you\'re looking for!';

  return (
    <div>
      <HelmetDefault title={pageTitle} description={pageDescription}/>
      <Layout>
        <h1>404 Error</h1>
        <h4>Page not found!</h4>
      </Layout>
    </div>
  );
};

export default notFoundPage;
