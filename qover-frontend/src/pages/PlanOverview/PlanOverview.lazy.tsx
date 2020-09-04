import React, { lazy, Suspense } from 'react';

const LazyPlanOverview = lazy(() => import('./PlanOverview'));

const PlanOverview = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPlanOverview {...props} />
  </Suspense>
);

export default PlanOverview;
