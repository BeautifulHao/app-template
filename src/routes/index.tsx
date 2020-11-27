import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import { RouteConfig } from "react-router-config";
import BlankLayout from "../layout/BlankLayout";
import LasyLoading from '../components/LazyLoading/index'

const SuspenseComponent = (Component: any) => (props: any) => {
    return (
        <Suspense fallback={LasyLoading} >
            <Component {...props} > </Component>
        </Suspense>
    )
}

const HomePage = lazy(() => import("../pages/home"));

const routers: RouteConfig[] = [
    {
        component: BlankLayout,
        routes: [
            {
                path: "/",
                component: BlankLayout,
                routes: [
                    {
                        path: "/",
                        exact: true,
                        render: () => <Redirect to={"/home"} />
                    },
                    {
                        path: "/home",
                        component: SuspenseComponent(HomePage)
                    },
                    {
                        path: "/loading",
                        component: SuspenseComponent(LasyLoading)
                    }
                ]
            }
        ]
    }
];

export default routers