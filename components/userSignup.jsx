import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function UsersignUp(props) {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userNumber, setuserNumber] = useState("");
  const [userPass, setuserPass] = useState("");
  const [userAddress, setuserAddress] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const navigate = useNavigate();
  function getCity() {
    const get_city = async () => {
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?${
          props.userLocation === null ? "" : props.userLocation.coords.latitude
        }&${
          props.userLocation === null ? "" : props.userLocation.coords.longitude
        }&localityLanguage=en
  `,
        {
          method: "GET",
        }
      );
      const output = await res.json();
      setUserLocation(output);
      console.log(output);
    };
    get_city();
  }
  useEffect(() => {
    getCity();
  }, []);
  function verifyandsend() {
    if (
      userName != "" &&
      userEmail != "" &&
      userNumber != "" &&
      userPass != "" &&
      userAddress != ""
    ) {
      const sendtobackend = async () => {
        const res = await fetch(
          "https://salonify-backend.onrender.com/auth/user/signup",
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userName: userName,
              userEmail: userEmail,
              userPass: userPass,
              userNumber: userNumber,
              userAddress: userAddress,
              userState: userLocation.principalSubdivision,
              userCity: userLocation.city,
            }),
          }
        );

        const output = await res.json();
        console.log(output);
        if (output.msg === "User Created Successfully") {
          navigate("/login");
        } else {
          alert(output.msg);
        }
      };
      sendtobackend();
    } else {
      alert("empty fields");
    }
  }
  return (
    <>
      <div className="flex flex-col inter-normal">
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="User Name"
          className="border-b-1 border-black mx-20 my-5 p-2 outline-none"
          value={userName}
          onChange={(text) => setuserName(text.target.value)}
        />
        <input
          type="text"
          name="userEmail"
          id="userEmail"
          placeholder="User Email"
          className="border-b-1 border-black mx-20 my-5 p-2 outline-none"
          value={userEmail}
          onChange={(text) => setuserEmail(text.target.value)}
        />

        <input
          type="password"
          name="userPass"
          id="userPass"
          placeholder="User Password"
          className="border-b-1 border-black mx-20 my-5 p-2 outline-none"
          value={userPass}
          onChange={(text) => setuserPass(text.target.value)}
        />

        <input
          type="text"
          name="userNumber"
          id="userNumber"
          placeholder="User Number"
          className="border-b-1 border-black mx-20 my-5 p-2 outline-none"
          value={userNumber}
          onChange={(text) => setuserNumber(text.target.value)}
        />
        <input
          type="text"
          name="userAddress"
          id="userAddress"
          placeholder="User Address"
          className="border-b-1 border-black mx-20 my-5 p-2 outline-none"
          value={userAddress}
          onChange={(text) => setuserAddress(text.target.value)}
        />
      </div>
      <div className="flex justify-center items-center my-10 flex-col inter-normal">
        <button
          className="bg-[#EEEEEE] px-10 py-3 rounded-lg"
          onClick={verifyandsend}
        >
          Sign Up
        </button>
        <p
          className="mt-10 cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        >
          Already have an account?
        </p>
      </div>
    </>
  );
}

export default UsersignUp;
