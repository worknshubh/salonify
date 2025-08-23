function MyBookings(props) {
  return (
    <>
      <div className="grid grid-cols-5 gap-2 w-[100%] p-2">
        <h2>{props.data.serviceTitle}</h2>
        <h2>{props.data.scheduledDate}</h2>
        <h2>{props.data.scheduledTime}</h2>
        <h2>₹ {props.data.serviceCost}</h2>
        <h2>{props.data.paymentStatus}</h2>
      </div>
    </>
  );
}

export default MyBookings;
