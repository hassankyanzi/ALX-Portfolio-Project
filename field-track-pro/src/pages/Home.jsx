import Feature from "../components/Feature";
import manage from "../images/people-tracking.svg";
import gapTracking from "../images/gps-tracking.svg";
import routePlanning from "../images/route-planning.jpg";
import taskManagement from "../images/task-management.svg";
import ImageContent from "../components/ImageContent";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  useEffect(() => {
    // Automatically scrolls to top whenever pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="bg-primary">
        <div className="mx-auto mb-6 md:mb-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 py-16 min-h-96">
            <div className="w-full h-full p-6 text-white content-center">
              <h1 className="text-2xl md:text-5xl font-bold mb-2">
                Field Track Pro
              </h1>
              <p>Enhancing Field Team Efficiency and Customer Satisfaction</p>
            </div>
            <div className="w-full h-full p-6">
              <img
                alt="A person looking through his phone to manage hist employees"
                src={manage}
                className="img-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto -mt-24 md:-mt-32 max-w-screen-2xl px-2 md:px-4">
        <div className="bg-white shadow-md rounded-md border p-8 md:p-12">
          <h2 className="text-lg md:text-xl font-bold mb-2">Field Track Pro</h2>
          <p className="text-gray-600">
            The lack of visibility into field team activities hinders our
            client's ability to optimize productivity, ensure timely follow-ups,
            and track the team's movements during the day. This has led to
            inefficiencies in the sales and installation processes, resulting in
            a loss of potential customers and revenue. So, we came up with a
            solution to bridge that gap between our client and his workers.
          </p>
        </div>
      </div>
      <div className="mx-auto my-24 max-w-5xl">
        <h2 className="text-center text-2xl md:text-5xl font-bold mb-4 capitalize">
          Improve your Field Team Productivity and Tracking Solution
        </h2>
        <p className="text-center text-sm md:text-base text-gray-600">
          Planado helps businesses manage their field workers more efficiently,
          enhancing transparency and improving performance quality.
        </p>
        <div className="grid grid-cols-2 mt-6 md:mt-12">
          <Feature
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
                className="w-12 h-12 md:w-16 md:h-16"
              >
                <path d="M80-600v-160q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v160h-80v-160H160v160H80Zm80 360q-33 0-56.5-23.5T80-320v-200h80v200h640v-200h80v200q0 33-23.5 56.5T800-240H160ZM40-120v-80h880v80H40Zm440-420ZM80-520v-80h240q11 0 21 6t15 16l47 93 123-215q5-9 14-14.5t20-5.5q11 0 21 5.5t15 16.5l49 98h235v80H620q-11 0-21-5.5T584-542l-26-53-123 215q-5 10-15 15t-21 5q-11 0-20.5-6T364-382l-69-138H80Z" />
              </svg>
            }
            title={"Monitor team's activities in real-time"}
          />
          <Feature
            svg={
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-12 h-12 md:w-16 md:h-16"
              >
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <polyline
                    className="st0"
                    points="19,19 24,19 24,24 "
                  ></polyline>
                  <polyline
                    className="st0"
                    points="6,23 11,23 11,18 "
                  ></polyline>
                  <path
                    className="st0"
                    d="M24,19.4c-0.7,0.8-1.4,1.6-2.2,2.4c-7,7-15.3,10.2-18.5,7s-0.1-11.5,7-18.5s15.3-10.2,18.5-7 c1.4,1.4,1.6,3.6,0.8,6.3"
                  ></path>
                  <path
                    className="st0"
                    d="M11,22.5c-0.3-0.2-0.5-0.5-0.8-0.8c-7-7-10.2-15.3-7-18.5s11.5-0.1,18.5,7s10.2,15.3,7,18.5 c-1.7,1.7-4.8,1.6-8.4,0.1"
                  ></path>
                </g>
              </svg>
            }
            title={
              "Track the team's movements and locations throughout the day"
            }
          />
          <Feature
            svg={
              <svg
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-12 h-12 md:w-16 md:h-16"
              >
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g transform="translate(-384.000000, 0.000000)">
                      <g transform="translate(384.000000, 0.000000)">
                        <path
                          d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M16,14 C18.7614,14 21,16.2386 21,19 L21,21 C21,21.5523 20.5523,22 20,22 C19.4477,22 19,21.5523 19,21 L19,19 C19,17.3431 17.6569,16 16,16 L8,16 C6.34315,16 5,17.3431 5,19 L5,21 C5,21.5523 4.55228,22 4,22 C3.44772,22 3,21.5523 3,21 L3,19 C3,16.2386 5.23858,14 8,14 L16,14 Z M21.4141,9.08128 C21.8047,8.69076 22.4378,8.69076 22.8284,9.08128 C23.1888615,9.44176923 23.2165893,10.009022 22.9115834,10.4012974 L22.8284,10.4955 L19.9999,13.3239 C19.6394385,13.6843615 19.0721793,13.7120893 18.6799027,13.4070834 L18.5857,13.3239 L17.1715,11.9097 C16.781,11.5192 16.781,10.886 17.1715,10.4955 C17.5319615,10.1350385 18.0992207,10.1073107 18.4914973,10.4123166 L18.5857,10.4955 L19.2928,11.2026 L21.4141,9.08128 Z M12,2 C14.7614,2 17,4.23858 17,7 C17,9.76142 14.7614,12 12,12 C9.23858,12 7,9.76142 7,7 C7,4.23858 9.23858,2 12,2 Z M12,4 C10.3431,4 9,5.34315 9,7 C9,8.65685 10.3431,10 12,10 C13.6569,10 15,8.65685 15,7 C15,5.34315 13.6569,4 12,4 Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            }
            title={"Ensure timely follow-ups with potential customers"}
          />
          <Feature
            svg={
              <svg
                fill="currentColor"
                height="200px"
                width="200px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 462.8 462.8"
                className="w-12 h-12 md:w-16 md:h-16"
              >
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <g>
                    <g>
                      <path d="M59.3,273.225H10.5c-5.8,0-10.5,4.7-10.5,10.5v20.3v89.1v20.3c0,5.8,4.7,10.5,10.5,10.5h48.8c5.8,0,10.5-4.7,10.5-10.5 v-20.3v-89.1v-20.3C69.8,277.925,65.1,273.225,59.3,273.225z"></path>
                      <path d="M157.9,214.925h-48.8c-5.8,0-10.5,4.7-10.5,10.5v78.6v30.8v78.6c0,5.8,4.7,10.5,10.5,10.5h48.8c5.8,0,10.5-4.7,10.5-10.5 v-78.6v-30.8v-78.6C168.4,219.625,163.7,214.925,157.9,214.925z"></path>
                      <path d="M267,246.025v-86.8h33.7c6.2,0,10-6.8,6.7-12.1l-68.6-110.2c-3.1-5-10.4-5-13.5,0l-68.6,110.2c-3.3,5.3,0.5,12.1,6.7,12.1 h33.7v254.2c0,5.8,4.7,10.5,10.5,10.5h48.8c5.8,0,10.5-4.7,10.5-10.4c-19.6-22.4-31.5-51.7-31.5-83.8 C235.4,297.725,247.3,268.425,267,246.025z"></path>
                      <path d="M362.9,229.825c-55.2,0-99.9,44.7-99.9,99.9s44.7,99.9,99.9,99.9s99.9-44.7,99.9-99.9S418.1,229.825,362.9,229.825z M391.6,369.225c-4.4,5.3-10,8.9-16.7,10.7c-2.9,0.8-4.2,2.3-4,5.3c0.1,2.9,0,5.9,0,8.9c0,2.6-1.3,4-3.9,4.1 c-3.2,0.1-6.4,0.1-9.5,0c-2.8-0.1-4.1-1.6-4.1-4.3c0-2.2,0-4.3-0.1-6.5c0-4.8-0.2-5-4.8-5.7c-5.9-0.9-11.6-2.3-17-4.9 c-4.2-2-4.6-3.1-3.4-7.5c0.9-3.3,1.8-6.6,2.8-9.8c1.2-3.8,2.2-4.2,5.7-2.4c5.9,3.1,12.2,4.8,18.8,5.6c4.3,0.5,8.4,0.1,12.3-1.6 c7.3-3.2,8.5-11.7,2.3-16.8c-2.1-1.7-4.5-3-7-4.1c-6.4-2.8-13.2-5-19.2-8.6c-9.9-5.9-16.1-14-15.4-26c0.8-13.6,8.5-22.1,21-26.6 c5.1-1.9,5.2-1.8,5.2-7.2c0-1.8,0-3.6,0-5.4c0.1-4.1,0.8-4.7,4.8-4.9c1.2,0,2.5,0,3.7,0c8.6,0,8.6,0,8.6,8.6c0,6.1,0,6.1,6.1,7 c4.6,0.7,9.1,2.1,13.3,4c2.4,1,3.3,2.7,2.5,5.2c-1.1,3.7-2.1,7.4-3.3,11.1c-1.1,3.5-2.2,4-5.6,2.4c-6.7-3.2-13.7-4.6-21.1-4.2 c-1.9,0.1-3.8,0.4-5.6,1.2c-6.4,2.8-7.4,9.9-2,14.2c2.8,2.2,5.9,3.8,9.2,5.2c5.7,2.3,11.4,4.6,16.7,7.6 C399,333.025,403.6,354.525,391.6,369.225z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            }
            title={"Improve overall sales and installation efficiency"}
          />
        </div>
        <ImageContent
          img={gapTracking}
          imgDesc={"gps tacking"}
          title={"GPS tracking"}
          desc={
            "Real-time tracking of the field team's movements and locations, with timestamps to ensure accountability."
          }
        />
        <ImageContent
          img={routePlanning}
          imgDesc={"Route planning"}
          title={"Route planning"}
          desc={
            "Optimize the field team's daily routes based on customer locations, appointments, and priorities."
          }
          orderReverse={true}
        />
        <ImageContent
          img={taskManagement}
          imgDesc={"Task management"}
          title={"Task management"}
          desc={
            "Assign and manage tasks for field team members, including lead follow-ups, installations, and sales activities."
          }
        />
      </div>
    </>
  );
}

export default Home;
