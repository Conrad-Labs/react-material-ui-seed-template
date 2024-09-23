import { lazy } from "react";

// project imports
import AuthGuard from "utils/route-guard/AuthGuard";
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

const UtilsTypography = Loadable(
  lazy(() => import("views/utilities/Typography"))
);
const UtilsColor = Loadable(lazy(() => import("views/utilities/Color")));
const UtilsShadow = Loadable(lazy(() => import("views/utilities/Shadow")));
const UtilsAnimation = Loadable(
  lazy(() => import("views/utilities/Animation"))
);
const UtilsGrid = Loadable(lazy(() => import("views/utilities/Grid")));

// sample page routing
const SamplePage = Loadable(lazy(() => import("views/sample-page")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "/",
      element: <SamplePage />,
    },
    {
      path: "/sample-page",
      element: <SamplePage />,
    },
    {
      path: "/utils/util-typography",
      element: <UtilsTypography />,
    },
    {
      path: "/utils/util-color",
      element: <UtilsColor />,
    },
    {
      path: "/utils/util-shadow",
      element: <UtilsShadow />,
    },
    {
      path: "/utils/util-animation",
      element: <UtilsAnimation />,
    },
    {
      path: "/utils/util-grid",
      element: <UtilsGrid />,
    },
  ],
};

export default MainRoutes;
