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
        <h2 className="text-2xl inter-normal">{props.saloonData.saloonName}</h2>
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
