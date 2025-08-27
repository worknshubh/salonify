import { useNavigate } from "react-router-dom";
import { Link, Element } from "react-scroll";
function Home() {
  const navigate = useNavigate();
  async function verifyandredirect() {
    const res = await fetch(
      "https://salonify-backend.vercel.app/api/auth/verifyrole",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const output = await res.json();
    if (output.msg === "Unauthorized user") {
      navigate("/login", { replace: true });
    } else {
      navigate("/services");
    }
  }
  return (
    <>
      <div className="relative">
        <div className="flex flex-row min-h-100 w-full">
          <div
            className="w-[40%] flex flex-col justify-center items-center"
            style={{ animation: "leftToright 0.5s ease-out forwards" }}
          >
            <h2 className="text-6xl my-2">Where Style</h2>
            <h2 className="text-6xl my-2">Meets</h2>
            <h2 className="text-6xl text-[#EFA61F] curl my-2">Simplicity</h2>
            <div className="my-3">
              <button
                className="bg-[#D9D9D9] px-12 py-4 rounded-lg shadow-[0px_20px_15px_-3px_rgba(0,_0,_0,_0.1)] text-lg cursor-pointer"
                onClick={verifyandredirect}
              >
                Book Now
              </button>
            </div>
          </div>
          <div
            className="w-[60%] flex justify-end items-center relative top-15"
            style={{ animation: "rightToleft 0.5s ease-out forwards" }}
          >
            <img src="/images/homepagepic.png"></img>
          </div>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#eee"
            fill-opacity="1"
            d="M0,128L10.4,128C20.9,128,42,128,63,122.7C83.5,117,104,107,125,101.3C146.1,96,167,96,188,112C208.7,128,230,160,250,165.3C271.3,171,292,149,313,138.7C333.9,128,355,128,376,117.3C396.5,107,417,85,438,112C459.1,139,480,213,501,229.3C521.7,245,543,203,563,170.7C584.3,139,605,117,626,101.3C647,85,668,75,689,85.3C709.6,96,730,128,751,138.7C772.2,149,793,139,814,160C834.8,181,856,235,877,266.7C897.4,299,918,309,939,282.7C960,256,981,192,1002,176C1022.6,160,1043,192,1064,208C1085.2,224,1106,224,1127,192C1147.8,160,1169,96,1190,96C1210.4,96,1231,160,1252,197.3C1273,235,1294,245,1315,234.7C1335.7,224,1357,192,1377,160C1398.3,128,1419,96,1430,80L1440,64L1440,320L1429.6,320C1419.1,320,1398,320,1377,320C1356.5,320,1336,320,1315,320C1293.9,320,1273,320,1252,320C1231.3,320,1210,320,1190,320C1168.7,320,1148,320,1127,320C1106.1,320,1085,320,1064,320C1043.5,320,1023,320,1002,320C980.9,320,960,320,939,320C918.3,320,897,320,877,320C855.7,320,835,320,814,320C793,320,772,320,751,320C730.4,320,710,320,689,320C667.8,320,647,320,626,320C605.2,320,584,320,563,320C542.6,320,522,320,501,320C480,320,459,320,438,320C417.4,320,397,320,376,320C354.8,320,334,320,313,320C292.2,320,271,320,250,320C229.6,320,209,320,188,320C167,320,146,320,125,320C104.3,320,83,320,63,320C41.7,320,21,320,10,320L0,320Z"
          ></path>
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-140"
          style={{ animation: "bottomTotop 0.5s ease-out forwards" }}
        >
          <path
            fill="#eee"
            fill-opacity="1"
            d="M0,128L10.9,154.7C21.8,181,44,235,65,256C87.3,277,109,267,131,266.7C152.7,267,175,277,196,256C218.2,235,240,181,262,149.3C283.6,117,305,107,327,101.3C349.1,96,371,96,393,122.7C414.5,149,436,203,458,218.7C480,235,502,213,524,218.7C545.5,224,567,256,589,245.3C610.9,235,633,181,655,165.3C676.4,149,698,171,720,160C741.8,149,764,107,785,80C807.3,53,829,43,851,48C872.7,53,895,75,916,112C938.2,149,960,203,982,224C1003.6,245,1025,235,1047,224C1069.1,213,1091,203,1113,208C1134.5,213,1156,235,1178,202.7C1200,171,1222,85,1244,48C1265.5,11,1287,21,1309,53.3C1330.9,85,1353,139,1375,154.7C1396.4,171,1418,149,1429,138.7L1440,128L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z"
          ></path>
        </svg>

        <Element name="about-section">
          <div
            className=" bg-[#eee]  top-15 p-4 relative pb-5"
            style={{ animation: "bottomTotop 0.5s ease-out forwards" }}
          >
            <div className="justify-center items-center flex flex-col relative">
              <img
                src="/images/scissors.png"
                className="relative -left-48 top-10"
              ></img>
              <h2 className="text-6xl border-b-2 border-[#ddd] p-1">
                Who are we
              </h2>
              <img
                src="/images/comb.png"
                className="relative -right-48 top-0"
              ></img>
            </div>

            <div className="flex flex-row justify-between px-20 mt-5 items-center">
              <div className="w-[20%] h-120 bg-white rounded-2xl shadow-[0px_10px_7px_-3px_rgba(0,_0,_0,_0.1)] group hover:scale-105 hover:shadow-[0px_6px_15px_-3px_rgba(0,_0,_0,_0.1)]">
                <img
                  src="/images/customer.jpeg"
                  className="group-hover:scale-90 rounded-t-2xl"
                />
                <h2 className="text-center text-3xl m-2">Users</h2>
                <p className="mx-4 my-2 text-justify inter-normal">
                  Salonify is a platform which connects users who are tired of
                  wasting their precious time standing in long, frustrating
                  lines just to get a haircut, helping them book appointments
                  seamlessly and enjoy a hassle-free grooming experience to…
                </p>
              </div>
              <img
                src="/images/arrow1.png"
                className="absolute top-160 left-90"
              ></img>
              <h2 className="text-5xl text-[#EFA61F] ">Salonify</h2>
              <div className="w-[20%] h-120 bg-white rounded-2xl mt-50 shadow-[0px_10px_7px_-3px_rgba(0,_0,_0,_0.1)] group hover:scale-105 hover:shadow-[0px_6px_15px_-3px_rgba(0,_0,_0,_0.1)]">
                <img
                  src="/images/barber.jpg"
                  className="group-hover:scale-90 rounded-t-2xl"
                />
                <h2 className="text-center text-3xl m-2">Barbers</h2>
                <p className="mx-4 my-2 text-justify inter-normal">
                  ..to barbers who want to reach more customers, manage
                  appointments efficiently, reduce idle time, and grow their
                  business while providing a smooth, hassle-free experience for
                  every client.
                </p>
              </div>
              <img
                src="/images/arrow2.png"
                className="absolute top-103 right-113"
              ></img>
            </div>
          </div>
        </Element>
        <div className=" bg-gradient-to-b from-[#eee] to-[#f8f9fa] mt-15 p-6 flex justify-center flex-col items-center">
          <div className="justify-center items-center flex flex-col ">
            <h2 className="text-4xl">What We Offer</h2>
          </div>
          <div className="flex flex-row justify-between w-[80%] my-10 inter-normal">
            <div className="bg-white h-60 w-[26%] border-2 border-[#ddd] flex flex-col justify-center-safe items-center rounded-lg hover:border-[#efa61f] hover:h-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#ddd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                >
                  <path d="M9 20H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v3M8 2v2m7-2v2M2 8h19m-2.5 7.643l-1.5 1.5" />
                  <circle cx="17" cy="17" r="5" />
                </g>
              </svg>
              <h2 className="mt-2 text-2xl">Smart Scheduling</h2>
              <p className="p-4 text-center">
                Salonify lets you book instantly, get timely reminders, and
                reschedule with ease.
              </p>
            </div>

            <div className="bg-white h-60 w-[26%] border-2 border-[#ddd] flex flex-col justify-center items-center rounded-lg hover:border-[#efa61f] hover:h-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 28 28"
              >
                <path
                  fill="#ddd"
                  d="M18.25 16.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM2.004 8.75A3.75 3.75 0 0 1 5.754 5H22.25A3.75 3.75 0 0 1 26 8.75v10.5A3.75 3.75 0 0 1 22.25 23H5.755a3.75 3.75 0 0 1-3.75-3.75zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v.75H24.5v-.75a2.25 2.25 0 0 0-2.25-2.25zm-2.25 12.75a2.25 2.25 0 0 0 2.25 2.25H22.25a2.25 2.25 0 0 0 2.25-2.25V11H3.505z"
                />
              </svg>
              <h2 className="mt-2 text-2xl">Hassle-Free Payments</h2>
              <p className="p-4 text-center">
                Salonify offers secure checkout, quick transactions, and
                transparent pricing.
              </p>
            </div>

            <div className="bg-white h-60 w-[26%] border-2 border-[#ddd] flex flex-col justify-center-safe items-center rounded-lg hover:border-[#efa61f] hover:h-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#ddd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M12.56 20.82a.96.96 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.6 7.6 0 0 1 12 3c2 0 3.919.785 5.333 2.181c5.181 5.116.056 12.196-4.773 15.64" />
                  <path d="M12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
                </g>
              </svg>
              <h2 className="mt-2 text-2xl">Nearby Salons</h2>
              <p className="p-4 text-center">
                Salonify helps you find salons nearby, explore services, and
                choose the best fit.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f9fa] flex flex-row relative">
          <img src="/images/section4.png" className="h-200"></img>
          <img
            src="/images/arrow3.png"
            className="absolute h-30 left-230 top-100"
          ></img>

          <div className=" flex justify-center items-center flex-col">
            <h2 className="text-5xl m-5">Waiting for what?</h2>
            <button
              className="bg-[#D9D9D9] px-12 py-4 rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1)] text-lg cursor-pointer mb-30 ml-30 hover:shadow-[0px_23px_15px_-3px_rgba(0,_0,_0,_0.2)] hover:-translate-y-1 active:translate-y-1 active:shadow-[0px_15px_5px_-3px_rgba(0,_0,_0,_0.2)] "
              onClick={verifyandredirect}
            >
              Schedule Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
