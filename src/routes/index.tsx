import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import HomeLayout from '../layout/HomeLayout';
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
const ProfilePage = SuspenseComponent(lazy(() => import('../pages/profile')));
const CompassPage = SuspenseComponent(lazy(() => import('../pages/compass')));

const routers: RouteConfig[] = [
  {
    path: '/',
    component: HomeLayout,
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
        path: '/profile',
        component: ProfilePage
      },
      {
        path: '/about',
        component: AboutPage
      },
      {
        path: '/compass',
        component: CompassPage
      }
    ]
  }
];

export default routers;
