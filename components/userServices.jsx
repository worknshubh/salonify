import Service_card from "./service_card";

function UserServices(props) {
  if (
    !props.saloonData.services[0] ||
    props.saloonData.services[0].servicesOffered.length === 0
  ) {
    return null;
  }
  function getDatafromservice(data) {
    props.onBook(data);
  }
  return (
    <>
      <div className="bg-[#EEEEEE] p-8 mx-10 my-3 rounded-2xl">
        <div className="flex flex-row items-center">
          {props.saloonData.userImage != null ? (
            <img
              src={props.saloonData.userImage}
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              className="cursor-pointer mr-4"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 512 512"
              className="cursor-pointer mr-4"
            >
              <path
                fill="#d9d9d9"
                fill-rule="evenodd"
                d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"
              />
            </svg>
          )}
          <h2 className="text-2xl inter-normal">
            {props.saloonData.saloonName}
          </h2>
        </div>
        <div className="flex flex-row overflow-x-auto m-15 m-auto">
          {props.saloonData.services[0].servicesOffered.map((el) => {
            return (
              <Service_card serviceData={el} onBook={getDatafromservice} />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default UserServices;
