import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import HomeLayout from '../layout/HomeLayout';
import LazyLoading from '../components/LazyLoading/index';
import BlankLayout from '../layout/BlankLayout';

const SuspenseComponent = (Component: React.ComponentType<any>) => {
  return (props: any) => (
    <Suspense fallback={<LazyLoading />}>
      <Component {...props} />
    </Suspense>
  );
};

const HomePage = SuspenseComponent(lazy(() => import('../pages/home')));
const AboutPage = SuspenseComponent(lazy(() => import('../pages/about')));
const ProfilePage = SuspenseComponent(lazy(() => import('../pages/profile')));
const CompassPage = SuspenseComponent(lazy(() => import('../pages/compass')));

const routers: RouteConfig[] = [
  {
    path: '/page',
    component: HomeLayout,
    routes: [
      {
        path: '/page',
        exact: true,
        render: () => <Redirect to="/page/home" />
      },
      {
        path: '/page/home',
        component: HomePage
      },
      {
        path: '/page/profile',
        component: ProfilePage
      },
      {
        path: '/page/about',
        component: AboutPage
      },
      {
        path: '/page/compass',
        component: CompassPage
      }
    ]
  },
  {
    path: '/',
    component: BlankLayout
  }
];

export default routers;
