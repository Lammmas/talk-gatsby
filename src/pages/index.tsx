import * as React from 'react';
import type { HeadFC } from 'gatsby';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const ClientSideOnlyLazy = React.lazy(() => import('../components/Chat'));

const IndexPage = () => {
  const isSSR = typeof window === 'undefined';

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Chat app</h1>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <ClientSideOnlyLazy />
        </React.Suspense>
      )}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Chat app</title>;
