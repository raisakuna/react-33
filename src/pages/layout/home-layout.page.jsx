import { Outlet } from "react-router-dom";
import { HomeHeader } from "../../components/headers/header.component";
import { HomeFooter } from "../../components/footer/footer.component";

const HomePageLayout = () => {
  return (
    <>
      <HomeHeader user={null} />
      {/*  Content goes here */}
      <Outlet />
      <HomeFooter />
    </>
  );
};
export default HomePageLayout;
