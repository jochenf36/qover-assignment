import React, { lazy, Suspense } from 'react';

const LazyConfigurator = lazy(() => import('./Configurator'));

const Configurator = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyConfigurator {...props} />
  </Suspense>
);

export default Configurator;
