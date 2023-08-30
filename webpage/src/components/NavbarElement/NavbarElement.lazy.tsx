import React, { lazy, Suspense } from 'react';

const LazyNavbarElement = lazy(() => import('./NavbarElement'));

const NavbarElement = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNavbarElement texto='hola' {...props} />
  </Suspense>
);

export default NavbarElement;
