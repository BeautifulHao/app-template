import React from 'react';
import { renderRoutes } from 'react-router-config';

const Layout: React.FC<any> = ({ route }) => <>{renderRoutes(route.routes)}</>;

export default Layout;
