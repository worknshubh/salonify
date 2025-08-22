import { useEffect, useState } from "react";
import EditProfile from "../components/editProfile";
import { useNavigate } from "react-router-dom";

function ProfileScreen() {
  const [editProfile, setEditProfile] = useState(false);
  const [userInfo, setuserInfo] = useState(null);
  const navigate = useNavigate();
  function checkLogin() {
    if (document.cookie.includes("token")) {
    } else {
      navigate("/login");
    }
  }
  async function getUserData() {
    const res = await fetch("http://127.0.0.1:4444/auth/info", {
      method: "GET",
      credentials: "include",
    });
    const output = await res.json();
    console.log(output);
    setuserInfo(output);
  }

  useEffect(() => {
    checkLogin();
    getUserData();
  }, [editProfile]);

  function getResfromEdit(data) {
    setEditProfile(data.visible);
    console.log(data.visible);
  }
  return (
    <>
      {editProfile === true ? (
        <div className="w-[50%] m-auto">
          <div>
            <EditProfile visibility={getResfromEdit} data={userInfo} />
          </div>
        </div>
      ) : (
        <div className="min-h-max">
          <div className="flex justify-center items-center flex-col rel">
            {userInfo?.data?.userImage == null ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#d9d9d9"
                  fill-rule="evenodd"
                  d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"
                />
              </svg>
            ) : (
              <img
                src={userInfo?.data?.userImage}
                style={{
                  height: "150px",
                  width: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            )}
            <div className="flex flex-row relative justify-center items-center">
              <h2 className="text-2xl">{userInfo?.data?.userName}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="absolute -right-10 cursor-pointer"
                onClick={() => {
                  setEditProfile(true);
                }}
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                >
                  <path
                    d="M16.401 20.5L6 2m16 17a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"
                    opacity="0.5"
                  />
                  <path d="M7.599 20.5L18 2M2 19a3 3 0 1 0 6 0a3 3 0 0 0-6 0Z" />
                </g>
              </svg>
            </div>
          </div>
          {userInfo?.data?.userRole === "Customer" ? (
            <div className=" flex justify-center items-center mt-8 inter-normal h-130">
              <div className="bg-[#EEEEEE] w-[35%] h-[100%] rounded-2xl">
                <div className="flex justify-center items-center m-3 flex-col">
                  <h2 className="text-lg mb-5">My Bookings History</h2>
                  <div className="w-[100%] flex justify-center items-center flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180px"
                      height="180px"
                      viewBox="0 0 2048 2048"
                    >
                      <path
                        fill="#d9d9d9"
                        d="M896 1536h128v128H896zm64-960q66 0 124 25t101 69t69 102t26 124q0 60-19 104t-47 81t-62 65t-61 59t-48 63t-19 76v64H896v-64q0-60 19-104t47-81t62-65t61-59t48-63t19-76q0-40-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75H640q0-66 25-124t68-101t102-69t125-26"
                      />
                    </svg>
                    <h2 className="text-[#a19d9d]">No Bookings Found</h2>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className=" flex justify-center items-center mt-8 inter-normal h-130">
              <div className="bg-[#EEEEEE] w-[35%] h-[100%] rounded-2xl">
                <div className="flex justify-center items-center m-3 flex-col">
                  <h2 className="text-lg mb-5">Scheduled Bookings</h2>
                  <div className="w-[100%] flex justify-center items-center flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180px"
                      height="180px"
                      viewBox="0 0 2048 2048"
                    >
                      <path
                        fill="#d9d9d9"
                        d="M896 1536h128v128H896zm64-960q66 0 124 25t101 69t69 102t26 124q0 60-19 104t-47 81t-62 65t-61 59t-48 63t-19 76v64H896v-64q0-60 19-104t47-81t62-65t61-59t48-63t19-76q0-40-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75H640q0-66 25-124t68-101t102-69t125-26"
                      />
                    </svg>
                    <h2 className="text-[#a19d9d]">No Bookings Found</h2>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ProfileScreen;
