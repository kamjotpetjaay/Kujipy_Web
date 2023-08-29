import React, { lazy, Suspense } from 'react';
import { Imagen } from './ImageSlider';

const LazyImageSlider = lazy(() => import('./ImageSlider'));
const galeriaImagenes: Imagen[] = [] 

const ImageSlider = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyImageSlider galeriaImagenes={galeriaImagenes} {...props} />
  </Suspense>
);

export default ImageSlider;
