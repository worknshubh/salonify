import { useEffect, useState } from "react";
import UsersignUp from "../components/userSignup";
import PartnersignUp from "../components/partnerSignup";
import { useNavigate } from "react-router-dom";
function Signup_screen() {
  const [activeComp, setactiveComp] = useState("user");
  const [Loc, setLoc] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);
  function success(position) {
    setLoc(position);
  }
  function error() {
    console.log("can't able to fetch location");
  }
  function partnercomponent() {
    setactiveComp("partner");
  }
  function usercomponent() {
    setactiveComp("user");
  }
  return (
    <>
      <div className="min-h-screen bg-[#FFFFFF] w-full">
        <div className="flex flex-col justify-center items-center border-2 min-h-screen w-[100%]">
          <div>
            <h2 className="curl text-6xl mb-3">Join the Glam</h2>
          </div>
          <div className="bg-[#FFFFFF] w-[30%] rounded-2xl shadow-[0px_20px_15px_-3px_rgba(0,_0,_0,_0.1)]">
            <div className="w-[60%] m-auto flex flex-row justify-between bg-[#EEEEEE] p-3 mt-10 rounded-lg">
              <h2
                className="mx-5 px-6 py-2 rounded-lg cursor-pointer"
                style={
                  activeComp === "user"
                    ? { backgroundColor: "#D9D9D9" }
                    : { backgroundColor: "#EEEEEE" }
                }
                onClick={usercomponent}
              >
                User
              </h2>
              <h2
                className="mx-5 px-6 rounded-lg py-2 cursor-pointer"
                style={
                  activeComp !== "user"
                    ? { backgroundColor: "#D9D9D9" }
                    : { backgroundColor: "#EEEEEE" }
                }
                onClick={partnercomponent}
              >
                Partner
              </h2>
            </div>
            <div className="mt-10">
              {activeComp === "user" ? (
                <UsersignUp userLocation={Loc} />
              ) : (
                <PartnersignUp userLocation={Loc} />
              )}
            </div>
          </div>
        </div>
        <img
          src="../src/assets/images/signuppage.png"
          className="absolute -right-70 bottom-0"
        ></img>
      </div>
    </>
  );
}

export default Signup_screen;
