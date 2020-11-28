import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import BlankLayout from '../layout/BlankLayout';
import LazyLoading from '../components/LazyLoading/index';

const SuspenseComponent = (Component: React.ComponentType<any>) => {
  return (props: any) => (
    <Suspense fallback={<LazyLoading />}>
      <Component {...props} />
    </Suspense>
  );
}

const HomePage = SuspenseComponent(lazy(() => import('../pages/home')));
const AboutPage = SuspenseComponent(lazy(() => import('../pages/about')));


const routers: RouteConfig[] = [
  {
    path: '/',
    component: BlankLayout,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to="/home" />
      },
      {
        path: '/home',
        component: HomePage
      },
      {
        path: '/about',
        component: AboutPage
      }
    ]
  }
];

export default routers;
