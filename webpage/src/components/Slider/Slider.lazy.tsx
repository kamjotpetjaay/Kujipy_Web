import React, { lazy, Suspense } from 'react';

const LazySlider = lazy(() => import('./Slider'));

const Slider = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySlider images={[]} {...props} />
  </Suspense>
);

export default Slider;
