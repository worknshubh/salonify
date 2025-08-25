import { useNavigate } from "react-router-dom";

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
      navigate("/login");
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-140"
          style={{ animation: "bottomTotop 0.5s ease-out forwards" }}
        >
          <path
            fill="#eee"
            fill-opacity="1"
            d="M0,128L10.4,128C20.9,128,42,128,63,122.7C83.5,117,104,107,125,101.3C146.1,96,167,96,188,112C208.7,128,230,160,250,165.3C271.3,171,292,149,313,138.7C333.9,128,355,128,376,117.3C396.5,107,417,85,438,112C459.1,139,480,213,501,229.3C521.7,245,543,203,563,170.7C584.3,139,605,117,626,101.3C647,85,668,75,689,85.3C709.6,96,730,128,751,138.7C772.2,149,793,139,814,160C834.8,181,856,235,877,266.7C897.4,299,918,309,939,282.7C960,256,981,192,1002,176C1022.6,160,1043,192,1064,208C1085.2,224,1106,224,1127,192C1147.8,160,1169,96,1190,96C1210.4,96,1231,160,1252,197.3C1273,235,1294,245,1315,234.7C1335.7,224,1357,192,1377,160C1398.3,128,1419,96,1430,80L1440,64L1440,320L1429.6,320C1419.1,320,1398,320,1377,320C1356.5,320,1336,320,1315,320C1293.9,320,1273,320,1252,320C1231.3,320,1210,320,1190,320C1168.7,320,1148,320,1127,320C1106.1,320,1085,320,1064,320C1043.5,320,1023,320,1002,320C980.9,320,960,320,939,320C918.3,320,897,320,877,320C855.7,320,835,320,814,320C793,320,772,320,751,320C730.4,320,710,320,689,320C667.8,320,647,320,626,320C605.2,320,584,320,563,320C542.6,320,522,320,501,320C480,320,459,320,438,320C417.4,320,397,320,376,320C354.8,320,334,320,313,320C292.2,320,271,320,250,320C229.6,320,209,320,188,320C167,320,146,320,125,320C104.3,320,83,320,63,320C41.7,320,21,320,10,320L0,320Z"
          ></path>
        </svg>
        <div
          className=" bg-[#eee]  top-15 p-4 relative"
          style={{ animation: "bottomTotop 0.5s ease-out forwards" }}
        >
          <div className="justify-center items-center flex flex-col relative">
            <img
              src="/images/scissors.png"
              className="relative -left-48 top-10"
            ></img>
            <h2 className="text-6xl">Who are we</h2>
            <img
              src="/images/comb.png"
              className="relative -right-48 top-0"
            ></img>
          </div>

          <div className="flex flex-row justify-between px-20 mt-5 items-center">
            <div className="w-[20%] h-120 bg-white rounded-2xl shadow-[0px_10px_7px_-3px_rgba(0,_0,_0,_0.1)] group">
              <img
                src="/images/customer.jpeg"
                className="group-hover:scale-90 rounded-t-2xl"
              />
              <h2 className="text-center text-3xl m-2">Users</h2>
              <p className="mx-4 my-2 text-justify inter-normal">
                Salonify is a platform which connects users who are tired of
                wasting their precious time standing in long, frustrating lines
                just to get a haircut, helping them book appointments seamlessly
                and enjoy a hassle-free grooming experience to…
              </p>
            </div>
            <img
              src="/images/arrow1.png"
              className="absolute top-155 left-90"
            ></img>
            <h2 className="text-5xl">Salonify</h2>
            <div className="w-[20%] h-120 bg-white rounded-2xl mt-50 shadow-[0px_10px_7px_-3px_rgba(0,_0,_0,_0.1)] group">
              <img
                src="/images/barber.jpg"
                className="group-hover:scale-90 rounded-t-2xl"
              />
              <h2 className="text-center text-3xl m-2">Barbers</h2>
              <p className="mx-4 my-2 text-justify inter-normal">
                to barbers who want to reach more customers, manage appointments
                efficiently, reduce idle time, and grow their business while
                providing a smooth, hassle-free experience for every client.
              </p>
            </div>
            <img
              src="/images/arrow2.png"
              className="absolute top-103 right-113"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
