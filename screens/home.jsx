import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function verifyandredirect() {
    if (document.cookie.includes("token")) {
      navigate("/services");
    } else {
      navigate("/login");
    }
  }
  return (
    <>
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
          className="w-[60%] flex justify-end items-center"
          style={{ animation: "rightToleft 0.5s ease-out forwards" }}
        >
          <img src="src/assets/images/homepagepic.png"></img>
        </div>
      </div>
    </>
  );
}

export default Home;
