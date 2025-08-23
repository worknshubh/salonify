import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-lvh flex justify-center items-center flex-col">
        <h2 className="text-6xl">Salonify</h2>
        <h2 className="text-8xl inter-normal m-4">404</h2>
        <h4 className="text-3xl inter-normal">NOT FOUND</h4>
        <div className="mt-5">
          <img src="/images/errorpageimage.png" className="h-120" />
        </div>
        <button
          className="bg-[#eeeeee] inter-normal text-2xl py-3 px-6 rounded-2xl cursor-pointer hover:bg-[#e6e6e6]"
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home
        </button>
      </div>
    </>
  );
}

export default ErrorPage;
