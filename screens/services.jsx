import { useEffect, useState } from "react";
import Service_card from "../components/service_card";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  const [shopServices, setshopServices] = useState(null);
  const [clickonservice, setclickonservice] = useState(false);
  const [serviceTitle, setServiceTitle] = useState("");
  const [serviceDesc, setServiceDesc] = useState("");
  const [serviceCost, setServiceCost] = useState("");
  const [serviceImage, setServiceImage] = useState("");
  const [serviceImagelink, setserviceImagelink] = useState("");
  const [waitforRender, setwaitforRender] = useState(false);
  function checkforsignin() {
    if (document.cookie.includes("token")) {
    } else {
      navigate("/login");
    }
  }
  function getdata() {
    const getservices = async () => {
      const res = await fetch("http://127.0.0.1:4444/services/fetchservices", {
        method: "GET",
        credentials: "include",
      });
      const output = await res.json();
      console.log(output);
      setshopServices(output);
    };
    getservices();
  }

  function checkforrole() {
    const verify = async () => {
      const res = await fetch("http://127.0.0.1:4444/auth/verifyrole", {
        method: "GET",
        credentials: "include",
      });
      const output = await res.json();
      if (output.msg === "User") {
        navigate("/userservices");
      } else {
        getdata();
        setwaitforRender(true);
      }
    };
    verify();
  }
  useEffect(() => {
    checkforsignin();
    checkforrole();
  }, []);

  function addservicetobackend() {
    if (serviceTitle != "" && serviceDesc != "" && serviceCost != "") {
      const sendtobackend = async () => {
        const serviceImageupload = await uploadimage();
        const res = await fetch("http://127.0.0.1:4444/services/addservice", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            serviceTitle: serviceTitle,
            serviceDesc: serviceDesc,
            serviceCost: serviceCost,
            serviceImage: serviceImageupload,
          }),
        });
        const output = await res.json();
        console.log(output);
        if (output.msg === "service added successfully") {
          getdata();
          setclickonservice(false);
          setServiceTitle("");
          setServiceCost("");
          setServiceDesc("");
          setServiceImage("");
          setserviceImagelink("");
        }
      };
      sendtobackend();
    } else {
      alert("Empty Fields");
    }
  }
  function newservice() {
    setclickonservice(true);
  }

  async function uploadimage() {
    const data = new FormData();
    data.append("file", serviceImage);
    data.append("cloud_name", "drjbxyfr6");
    data.append("upload_preset", "salonify_services");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/drjbxyfr6/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const output = await res.json();
    console.log(output);

    setserviceImagelink(output.secure_url);
    return output.secure_url;
  }
  return (
    <>
      {waitforRender === false ? (
        <div className="flex justify-center items-center h-lvh">
          <img src="src/assets/loader/loader.svg"></img>
        </div>
      ) : (
        <div className="py-5 mt-10">
          <div
            className="w-[70%] bg-[#D9D9D9] rounded-2xl h-40 m-auto shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1)] opacity-55 flex justify-center items-center backdrop-blur-2xl hover:opacity-30 cursor-pointer"
            onClick={newservice}
          >
            <img src="src/assets/images/addservice.png" alt="" />
          </div>

          <div
            className="flex flex-col bg-[#EEEEEE] w-[70%] m-auto my-5 p-10 rounded-2xl inter-normal"
            style={
              clickonservice === true
                ? { visibility: "visible" }
                : { display: "none" }
            }
          >
            <input
              type="text"
              name="serviceTitle"
              id="serviceTitle"
              placeholder="Enter the Title"
              className="p-2 outline-none border-b-1 my-4"
              value={serviceTitle}
              onChange={(text) => setServiceTitle(text.target.value)}
            />
            <input
              type="text"
              name="serviceDesc"
              id="serviceDesc"
              placeholder="Enter the Description"
              className="p-2 outline-none border-b-1 my-4"
              value={serviceDesc}
              onChange={(text) => setServiceDesc(text.target.value)}
            />
            <input
              type="text"
              name="serviceCost"
              id="serviceCost"
              placeholder="Enter the Price"
              className="p-2 outline-none border-b-1 my-4"
              value={serviceCost}
              onChange={(text) => setServiceCost(text.target.value)}
            />
            <label htmlFor="serviceImage" className="my-4">
              <span className="bg-[#E4E4E4] px-4 py-2 rounded-lg">
                Upload Image
              </span>
            </label>
            <input
              type="file"
              name="serviceImage"
              id="serviceImage"
              className="hidden"
              onChange={(el) => {
                setServiceImage(el.target.files[0]);
              }}
            />

            <div className="flex justify-end flex-row ">
              <button
                className="bg-[#E4E4E4] px-6 py-2 rounded-lg cursor-pointer"
                onClick={addservicetobackend}
              >
                Add Service
              </button>
              <button
                className="bg-[#E4E4E4] px-6 py-2 rounded-lg mx-4 cursor-pointer"
                onClick={() => {
                  setclickonservice(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>

          <div className="flex flex-row flex-wrap m-15 w-[70%] m-auto mt-25">
            {shopServices != null
              ? shopServices?.saloonServices?.servicesOffered.map((el) => {
                  return <Service_card serviceData={el} />;
                })
              : ""}
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
