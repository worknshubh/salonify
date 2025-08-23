import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function HeaderComponent() {
  const [userInfo, setuserInfo] = useState(null);

  async function getUserData() {
    const res = await fetch("https://salonify-backend.onrender.com/auth/info", {
      method: "GET",
      credentials: "include",
    });
    const output = await res.json();
    console.log(output);
    setuserInfo(output);
  }
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <div className="flex flex-row p-5 justify-between items-center">
        <div>
          <h2 className="text-4xl">Salonify</h2>
        </div>
        <div>
          <ul className="flex flex-row justify-center items-center">
            <li className="mx-10 text-2xl">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="mx-10 text-2xl">
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li className="mx-10 text-2xl">About Us</li>
            <li className="mx-10 text-2xl">Contact Us</li>
            <NavLink to={"/profile"}>
              {userInfo?.data?.userImage == null ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 512 512"
                  className="cursor-pointer"
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
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              )}
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
