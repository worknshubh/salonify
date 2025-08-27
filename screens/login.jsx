import { useState } from "react";
import UsersignIn from "../components/userSignIn";
import PartnersignIn from "../components/partnerSignIn";
import { useNavigate } from "react-router-dom";
function Login_screen() {
  const navigate = useNavigate();
  const [activeComp, setactiveComp] = useState("user");
  function partnercomponent() {
    setactiveComp("partner");
  }
  function usercomponent() {
    setactiveComp("user");
  }
  return (
    <>
      <div className="min-h-screen bg-[#FFFFFF] w-full relative">
        <div className="flex flex-col justify-center items-center border-2 min-h-screen w-[100%] z-10 relative">
          <div>
            <h2 className="curl text-6xl ">Welcome Back</h2>
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
              {activeComp === "user" ? <UsersignIn /> : <PartnersignIn />}
            </div>
          </div>
        </div>
        <img
          src="/images/loginpage.png"
          className="absolute -right-45 bottom-0 z-0"
        ></img>
      </div>
    </>
  );
}

export default Login_screen;
