import { useEffect, useState } from "react";
import UserServices from "../components/userServices";
import BookService from "../components/bookingService";

function Userservices() {
  const [browseservices, setBrowseServices] = useState(null);
  const [bookingVisible, setbookingVisible] = useState(false);
  const [bookindData, setbookingData] = useState(null);
  function browseServices() {
    const browse = async () => {
      const res = await fetch("http://127.0.0.1:4444/browse", {
        method: "GET",
        credentials: "include",
      });
      const output = await res.json();
      console.log(output);
      setBrowseServices(output);
    };
    browse();
  }
  useEffect(() => {
    browseServices();
  }, []);

  function getDatafromservice(data) {
    console.log(data);
    setbookingVisible(data.visiblity);
    setbookingData(data.serviceData);
  }

  function getdatafromBooking(data) {
    setbookingVisible(data.visibility);
    console.log(data.visibility);
  }
  return (
    <>
      <div
        className="w-[30%] m-auto h-200 flex justify-center items-center"
        style={
          bookingVisible === true
            ? { visibility: "visible" }
            : { display: "none" }
        }
      >
        <div className=" shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1)] rounded-lg">
          <BookService serviceData={bookindData} getData={getdatafromBooking} />
        </div>
      </div>
      <div
        style={
          bookingVisible === true
            ? { display: "none" }
            : { visibility: "visible" }
        }
      >
        <div className="px-10 py-3 flex flex-row justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="mr-1"
          >
            <path
              fill="#000"
              d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
            />
          </svg>
          <h2 className="text-2xl inter-normal">Salons In Your Area</h2>
        </div>
        <div>
          {browseservices?.saloonData.map((el) => {
            return <UserServices saloonData={el} onBook={getDatafromservice} />;
          })}
        </div>
        <div className="h-10"></div>
      </div>
    </>
  );
}

export default Userservices;
