import React, { lazy, Suspense } from 'react';

const LazyCar = lazy(() => import('./Car'));

const Car = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazyCar {...props} />
  </Suspense>
);

export default Car;
