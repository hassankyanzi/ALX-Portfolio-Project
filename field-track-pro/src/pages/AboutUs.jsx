import { useEffect } from "react";
import TeamBox from "../components/TeamBox";
import aboutUsImage from "../images/about-us.svg";
import { useLocation } from "react-router-dom";

function AboutUs() {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  useEffect(() => {
    // Automatically scrolls to top whenever pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div
        className="mx-auto mb-4 md:mb-6 w-full max-w-5xl bg-no-repeat bg-right min-h-96 border-b"
        style={{ backgroundImage: `url(${aboutUsImage})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 py-16 min-h-96">
          <div className="w-full h-full p-6 text-black content-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-2">About Us</h1>
            <p className="text-sm md:text-base text-gray-600">
              Field Track Prod is dedicated to empowering businesses of all
              sizes to navigate the ever-evolving digital landscape.
            </p>
          </div>
          <div className="w-full h-full p-6"></div>
        </div>
      </div>
      <div className="mx-auto my-24 w-full max-w-5xl text-center px-2 md:px-4">
        <h2 className="text-2xl md:text-5xl font-bold mb-2 capitalize">
          Meet the team
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          At the heart of Field Track Pro are our highly skilled and experienced
          professionals, who are passionate about delivering exceptional service
          and driving innovation.
        </p>
        <div className="my-8 md:my-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <TeamBox
            title={"Kyanzi Hassan Musisi"}
            subTitle={"Project Manager / Full Stack Developer"}
            desc={
              "Oversees project development, manages the team, and contributes to both mobile and web development."
            }
          />
          <TeamBox
            title={"Usman Abdul Hamid"}
            subTitle={"Full Stack Developer"}
            desc={
              "Focuses on both mobile and web development, ensuring all functional requirements are met."
            }
          />
          <TeamBox
            title={"Henok Estifanos"}
            subTitle={"Mobile App Developer"}
            desc={
              "Specializes in developing the mobile application, with expertise in location-based services and GPS tracking."
            }
          />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
