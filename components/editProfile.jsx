import { useEffect, useState } from "react";

function EditProfile(props) {
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userImage, setuserImage] = useState("");
  const [userExperience, setUserexperience] = useState("");
  const [saloonName, setsaloonName] = useState("");
  useEffect(() => {
    setUserName(props.data.data.userName);
    setUserNumber(props.data.data.userNumber);
    setUserAddress(props.data.data.userAddress);
    if (props.data.data.userRole != "Customer") {
      setUserexperience(props.data.data.userExperience);
      setsaloonName(props.data.data.saloonName);
    }
  }, []);

  async function ImgUpload() {
    if (userImage != "") {
      const imgdata = new FormData();
      imgdata.append("file", userImage);
      imgdata.append("cloud_name", "drjbxyfr6");
      imgdata.append("upload_preset", "salonify_profiles");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/drjbxyfr6/image/upload",
        {
          method: "POST",
          body: imgdata,
        }
      );
      const output = await res.json();
      console.log(output);
      return output.secure_url;
    } else {
      return props.data.data.userImage;
    }
  }
  function verifyandupdate() {
    if (userName != "" && userNumber != "" && userAddress != "") {
      const updatetoBackend = async () => {
        const userImage = await ImgUpload();
        if (props.data.data.userRole === "Customer") {
          const res = await fetch("http://127.0.0.1:4444/user/updateprofile", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userName: userName,
              userEmail: props.data.data.userEmail,
              userNumber: userNumber,
              userAddress: userAddress,
              userImage: userImage,
            }),
          });
          const output = await res.json();
        } else {
          const res = await fetch(
            "http://127.0.0.1:4444/salonowner/updateprofile",
            {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userName: userName,
                userEmail: props.data.data.userEmail,
                userNumber: userNumber,
                userAddress: userAddress,
                userImage: userImage,
                userExperience: userExperience,
                saloonName: saloonName,
              }),
            }
          );
          const output = await res.json();
        }

        props.visibility({ visible: false });
      };
      updatetoBackend();
    } else {
      alert("Empty Fields");
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center inter-normal">
        <div className="w-[100%] flex flex-col justify-center items-center">
          <label htmlFor="userImage">
            {props.data.data.userImage == null ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
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
                src={props.data.data.userImage}
                style={{
                  height: "150px",
                  width: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                className="cursor-pointer"
              />
            )}
          </label>
          <input
            type="file"
            name="userImage"
            id="userImage"
            className="hidden"
            onChange={(el) => setuserImage(el.target.files[0])}
          />
          <div className="flex flex-col m-5 w-[50%]">
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="What should we call you"
              className="border-b-1 p-2 outline-none m-2"
              value={userName}
              onChange={(text) => setUserName(text.target.value)}
            />
            <input
              type="text"
              name="userEmail"
              id="userEmail"
              className="border-b-1 p-2 outline-none m-2 text-[#afafaf]"
              value={props.data.data.userEmail}
            />
            <input
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="Can we call you on this number ?"
              className="border-b-1 p-2 outline-none m-2"
              value={userNumber}
              onChange={(text) => {
                setUserNumber(text.target.value);
              }}
            />

            <input
              type="text"
              name="userAddress"
              id="userAddress"
              placeholder="See you around"
              className="border-b-1 p-2 outline-none m-2"
              value={userAddress}
              onChange={(text) => {
                setUserAddress(text.target.value);
              }}
            />

            <input
              type="text"
              name="userExperience"
              id="userExperience"
              placeholder="Your Experience in this field?"
              className="border-b-1 p-2 outline-none m-2"
              style={
                props.data.data.userRole != "Customer"
                  ? { visibility: "visible" }
                  : { display: "none" }
              }
              value={userExperience}
              onChange={(text) => {
                setUserexperience(text.target.value);
              }}
            />

            <input
              type="text"
              name="saloonName"
              id="saloonName"
              placeholder="See you around"
              className="border-b-1 p-2 outline-none m-2"
              style={
                props.data.data.userRole != "Customer"
                  ? { visibility: "visible" }
                  : { display: "none" }
              }
              value={saloonName}
              onChange={(text) => {
                setsaloonName(text.target.value);
              }}
            />

            <div className="flex flex-row justify-end">
              <button
                className="my-5 bg-[#d9d9d9] py-3 px-5 mx-2 rounded-lg cursor-pointer"
                onClick={verifyandupdate}
              >
                Update Profile
              </button>
              <button
                className="my-5 bg-[#d9d9d9] py-3  px-5 mx-2 rounded-lg cursor-pointer"
                onClick={() => {
                  props.visibility({ visible: false });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
