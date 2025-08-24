import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function PartnersignUp(props) {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userNumber, setuserNumber] = useState("");
  const [saloonName, setsaloonName] = useState("");
  const [userPass, setuserPass] = useState("");
  const [userExperience, setuserExperience] = useState("");
  const [userAddress, setuserAddress] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  function getCity() {
    const get_city = async () => {
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?${props.userLocation.coords.latitude}&${props.userLocation.coords.longitude}&localityLanguage=en
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
      userAddress != null &&
      userExperience != null &&
      saloonName != null
    ) {
      const sendtobackend = async () => {
        const res = await fetch(
          "https://salonify-backend.vercel.app/api/auth/saloonowner/signup",
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
              userExperience: userExperience,
              saloonName: saloonName,
              saloonState: userLocation.principalSubdivision,
              saloonCity: userLocation.city,
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
          placeholder="Partner Name"
          className="border-b-1 border-black mx-20 my-5 p-2 outline-none"
          value={userName}
          onChange={(text) => setuserName(text.target.value)}
        />
        <input
          type="text"
          name="userEmail"
          id="userEmail"
          placeholder="Partner Email"
          className="border-b-1 border-black mx-20 my-5 p-2 outline-none"
          value={userEmail}
          onChange={(text) => setuserEmail(text.target.value)}
        />
        <input
          type="text"
          name="saloonName"
          id="saloonName"
          placeholder="Salon Name"
          className="border-b-1 border-black mx-20 my-5 p-2 outline-none"
          value={saloonName}
          onChange={(text) => setsaloonName(text.target.value)}
        />

        <input
          type="password"
          name="userPass"
          id="userPass"
          placeholder="Partner Password"
          className="border-b-1 border-black mx-20 my-5 p-2 outline-none"
          value={userPass}
          onChange={(text) => setuserPass(text.target.value)}
        />

        <div className="flex flex-row justify-between mx-20">
          <input
            type="text"
            name="userNumber"
            id="userNumber"
            placeholder="Partner Number"
            className="border-b-1 border-black my-5 p-2 outline-none w-[50%]"
            value={userNumber}
            onChange={(text) => setuserNumber(text.target.value)}
          />
          <input
            type="text"
            name="userExperience"
            id="userExperience"
            placeholder="Total Experience"
            className="border-b-1 border-black my-5 p-2 outline-none w-[40%]"
            value={userExperience}
            onChange={(text) => setuserExperience(text.target.value)}
          />
        </div>

        <input
          type="text"
          name="userAddress"
          id="userAddress"
          placeholder="Partner Address"
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

export default PartnersignUp;
