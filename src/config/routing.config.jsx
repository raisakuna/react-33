import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "../pages/landing";
import AboutUsPage from "../pages/about-us/about-us.page";
import AllProductGridPage from "../pages/products/all-products.page";
import HomePageLayout from "../pages/layout/home-layout.page";
import UserLayoutPage from "../pages/layout/user-layout.page";
import AdminDashboardPage from "../pages/dashboard/admin-dashboard.page";
import NotFoundPage from "../pages/errors/error-404.page";
import LoginPage from "../pages/auth/login/login.page";
import RegisterPage from "../pages/auth/register/register.page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "products",
        element: <AllProductGridPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <UserLayoutPage role="admin" />,
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      {
        path: "*",
        element: <NotFoundPage link="/" />,
      },
    ],
  },
]);

const Routing = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageLayout />}>
            <Route index element={<LandingPage />}></Route>
            <Route path="about-us" element={<AboutUsPage />}></Route>
            <Route path="products" element={<AllProductGridPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
};
export default Routing;
