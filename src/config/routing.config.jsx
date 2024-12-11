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
        path: "*",
        element: <>Error Page</>,
      },
    ],
  },
  {
    path: "/admin",
    element: <UserLayoutPage role="admin" />,
    children: [
      {
        index: true,
        element: <>Admin Dashboard</>,
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
