import { Footer } from "flowbite-react";
import { HomeHeader } from "../../components/headers/header.component";
import { PageTitle } from "../../components/title/title.component";
import { HomeFooter } from "../../components/footer/footer.component";

function LandingPage() {
  return (
    <>
      <HomeHeader user={{ name: "Sandesh", email: "sandesh@abc.com" }} />
      <HomeFooter />
    </>
    // <>
    //   {/* <div>
    //     <PageTitle></PageTitle>
    //     <p>
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
    //       doloremque veniam natus ipsum dicta itaque recusandae eveniet
    //       accusantium, adipisci ducimus quae magni, id beatae ipsa similique?
    //       Beatae, laudantium. Asperiores, pariatur.
    //     </p>
    //     <p>
    //       Ensure that there are no other tracking labels attached to your
    //       package. If you are shipping a non-hazardous item, completely remove
    //       or cover any hazardous materials markings.
    //     </p>
    //   </div> */}
    //   <HomeHeader />
    // </>
  );
}

export default LandingPage;
