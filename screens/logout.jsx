import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  async function logoutuser() {
    const res = await fetch(
      "https://salonify-backend.vercel.app/api/auth/verifyrole",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const output = await res.json();
    console.log(output.msg);
    navigate("/");
  }

  useEffect(() => {
    logoutuser();
  }, []);
  return <></>;
}

export default Logout;
