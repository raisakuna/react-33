import { Footer } from "flowbite-react";
import { PageTitle } from "../../components/title/title.component";
import { useState } from "react";
import HomeCarousel from "../../components/carousel/home-banner.component.jsx";

function LandingPage() {
  let [loading, setLoading] = useState(true);

  return (
    <>
      {/* <HomeHeader user={{ name: "Sandesh", email: "sandesh@abc.com" }} /> */}
      {/* <HomeHeader user={null} /> */}
      <HomeCarousel />
    </>
  );
}

export default LandingPage;
