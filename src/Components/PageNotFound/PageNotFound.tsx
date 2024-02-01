import React from 'react';
import { useRouteError } from 'react-router-dom';

import './PageNotFound.css';

const PageNotFound: React.FC = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <section className="page-not-found-container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
          <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
};

export default PageNotFound;
