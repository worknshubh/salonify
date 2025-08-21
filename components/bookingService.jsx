import Datetime from "react-datetime";
import moment from "moment";
import { useEffect, useState } from "react";
function BookService(props) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [userName, setUsername] = useState("");
  const [userNumber, setUsernumber] = useState("");
  const [userEmail, setUseremail] = useState("");
  const [dataLoaded, setdataLoaded] = useState(false);
  const [userData, setuserData] = useState(null);
  async function getUserData() {
    const res = await fetch("http://127.0.0.1:4444/auth/info", {
      method: "GET",
      credentials: "include",
    });
    const output = await res.json();
    setuserData(output);
    setdataLoaded(true);
    setUsername(output.data.userName);
    setUsernumber(output.data.userNumber);
    setUseremail(output.data.userEmail);
    console.log(output);
  }
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      {dataLoaded === true ? (
        <div className="flex flex-col justify-center items-center inter-normal rel bg-[#EEEEEE]">
          <div className="m-4 flex flex-row justify-center items-center w-[90%] relative">
            <h4 className="text-2xl">Book Service</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="absolute right-0 cursor-pointer"
              onClick={() => {
                props.getData({ visibility: false });
              }}
            >
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m5 19l7-7m0 0l7-7m-7 7L5 5m7 7l7 7"
              />
            </svg>
          </div>
          <div className="flex flex-col w-[100%] m-auto justify-center items-center">
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Your Name"
              className="p-2 border-b-1 outline-none w-[70%] m-4"
              value={userName}
              onChange={(text) => setUsername(text.target.value)}
            />
            <input
              type="text"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
              className="p-2 border-b-1 outline-none w-[70%] m-4 text-gray-400"
              value={userEmail}
            />
            <input
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="Your Contact Number"
              className="p-2 border-b-1 outline-none w-[70%] m-4"
              value={userNumber}
              onChange={(text) => setUsernumber(text.target.value)}
            />

            <div className="flex flex-row w-[70%] justify-center items-center m-4 p-2">
              <div className="border-b-1 outline-none w-[60%] m-2">
                <Datetime
                  inputProps={{ placeholder: "Select Date" }}
                  dateFormat="YYYY-MM-DD"
                  timeFormat={false}
                  isValidDate={(current) =>
                    current.isAfter(moment().subtract(1, "day"), "day")
                  }
                  onChange={(date) =>
                    setSelectedDate(date.format("YYYY-MM-DD"))
                  }
                />
              </div>

              <div className="border-b-1 outline-none w-[40%] m-2">
                <Datetime
                  inputProps={{ placeholder: "Select Time" }}
                  dateFormat={false}
                  timeFormat="hh:mm A"
                  onChange={(time) => {
                    if (time.hour() >= 10 && time.hour() <= 20) {
                      setSelectedTime(time.format("hh:mm A"));
                    } else {
                      alert("Please select between 10 AM and 8 PM");
                    }
                  }}
                />
              </div>
            </div>
            <div className="w-[70%]">
              <hr class="border-t-2 border-dotted border-gray-400" />
              <div className="mt-5">
                <h4 className="m-2 text-lg">
                  Service Type : {props.serviceData?.serviceTitle}
                </h4>
                <h4 className="m-2 text-lg">
                  Service Cost : {props.serviceData?.serviceCost}
                </h4>
              </div>
            </div>
            <div className="m-4 mb-8">
              <button className="bg-[#D9D9D9] px-5 py-3 rounded-lg cursor-pointer">
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-lvh">
          <img src="src/assets/loader/loader.svg"></img>
        </div>
      )}
    </>
  );
}

export default BookService;
