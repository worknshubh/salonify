import { useEffect, useState } from "react";

function Service_card(props) {
  const [userRole, setuserRole] = useState(null);
  const [editState, seteditState] = useState(false);
  const [serviceName, setServiceName] = useState(
    props.serviceData.serviceTitle
  );
  const [serviceDesc, setServiceDesc] = useState(props.serviceData.serviceDesc);
  const [serviceCost, setServiceCost] = useState(props.serviceData.serviceCost);
  function verifyRole() {
    const verifyuserrole = async () => {
      const res = await fetch("http://127.0.0.1:4444/auth/verifyrole", {
        method: "GET",
        credentials: "include",
      });
      const output = await res.json();
      console.log(output);
      setuserRole(output.msg);
    };
    verifyuserrole();
  }
  useEffect(() => {
    verifyRole();
  }, []);

  function updatetobackend() {
    if (serviceName != "" && serviceCost != "" && serviceDesc != "") {
      const update_to_backend = async () => {
        const res = await fetch(
          `http://127.0.0.1:4444/services/editservice/${props.serviceData._id}`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              serviceTitle: serviceName,
              serviceDesc: serviceDesc,
              serviceCost: serviceCost,
            }),
          }
        );
        const output = await res.json();
        console.log(output);
        location.reload();
      };
      update_to_backend();
    } else {
      alert("Empty Fields");
    }
  }

  function deletetheservice() {
    const delete_Service = async () => {
      const res = await fetch(
        `http://127.0.0.1:4444/services/deleteservice/${props.serviceData._id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const output = await res.json();
      console.log(output);
      location.reload();
    };
    delete_Service();
  }

  function bookingService() {
    props.onBook({ serviceData: props.serviceData, visiblity: true });
  }
  return (
    <>
      <div className="bg-white/20 rounded-2xl h-100 w-70 mx-5 my-5 shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1)] backdrop-blur-2xl border border-white/30 items-center flex flex-col hover:border-white">
        {props.serviceData.serviceImage == "" ? (
          <img
            src="src/assets/images/test.jpg"
            alt=""
            className="rounded-t-2xl h-100 object-cover"
          />
        ) : (
          <img
            src={props.serviceData.serviceImage}
            className="rounded-t-2xl object-cover h-48"
          ></img>
        )}
        <h2
          className="text-2xl my-2"
          style={
            editState === true ? { display: "none" } : { visibility: "visible" }
          }
        >
          {props.serviceData.serviceTitle}
        </h2>
        <input
          type="text"
          name="serviceTitle"
          id="serviceTitle"
          placeholder="Enter Service Name"
          className="p-2 outline-none border-b-1 my-4"
          value={serviceName}
          onChange={(text) => setServiceName(text.target.value)}
          style={
            editState === false
              ? { display: "none" }
              : { visibility: "visible" }
          }
        />
        <p
          className="p-2 text-center my-2 w-full overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] flex-2/3 inter-normal"
          style={
            editState === true ? { display: "none" } : { visibility: "visible" }
          }
        >
          {props.serviceData.serviceDesc}
        </p>
        <input
          type="text"
          name="serviceDesc"
          id="serviceDesc"
          placeholder="Enter Service Desc"
          className="p-2 outline-none border-b-1 my-4"
          value={serviceDesc}
          onChange={(text) => setServiceDesc(text.target.value)}
          style={
            editState === false
              ? { display: "none" }
              : { visibility: "visible" }
          }
        />
        <div className="flex flex-row justify-between w-[90%] px-4 items-center mb-3 inter-normal">
          <p
            style={
              editState === true
                ? { display: "none" }
                : { visibility: "visible" }
            }
          >
            ₹ {props.serviceData.serviceCost}
          </p>
          <input
            type="text"
            name="serviceCost"
            id="serviceCost"
            placeholder="Price"
            className="p-2 outline-none border-b-1 my-4 w-[30%]"
            value={serviceCost}
            onChange={(text) => setServiceCost(text.target.value)}
            style={
              editState === false
                ? { display: "none" }
                : { visibility: "visible" }
            }
          />
          <button
            className="bg-[#E6E6E6] px-8 py-2 rounded-2xl cursor-pointer hover:bg-[#D9D9D9]"
            onClick={() => {
              if (userRole === "SaloonOwner") {
                seteditState(true);
              } else {
                bookingService();
              }
            }}
            style={
              editState === true
                ? { display: "none" }
                : { visibility: "visible" }
            }
          >
            {userRole === "SaloonOwner" ? "Edit" : "Book"}
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={
              editState === false
                ? { display: "none" }
                : { visibility: "visible" }
            }
            className="mx-2 cursor-pointer"
            onClick={deletetheservice}
          >
            <path
              fill="#000"
              d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
          <button
            className="bg-[#D9D9D9] px-5 py-2 rounded-2xl cursor-pointer mx-2"
            onClick={updatetobackend}
            style={
              editState === false
                ? { display: "none" }
                : { visibility: "visible" }
            }
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default Service_card;
