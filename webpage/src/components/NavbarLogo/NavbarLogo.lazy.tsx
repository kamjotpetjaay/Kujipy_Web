import React, { lazy, Suspense } from 'react';

const LazyNavbarLogo = lazy(() => import('./NavbarLogo'));

const NavbarLogo = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNavbarLogo {...props} />
  </Suspense>
);

export default NavbarLogo;
