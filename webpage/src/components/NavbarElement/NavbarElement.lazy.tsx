import React, { lazy, Suspense } from 'react';

const LazyNavbarElement = lazy(() => import('./NavbarElement'));

const testFunction = (test: string) => {

}

const NavbarElement = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNavbarElement texto='hola' link='/' customStyle='' buttonName='' clickEvent={() =>testFunction} {...props}  />
  </Suspense>
);

export default NavbarElement;
