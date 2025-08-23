import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PartnersignIn() {
  const navigate = useNavigate();
  const [userEmail, setuserEmail] = useState("");
  const [userPass, setuserPass] = useState("");
  function verifyandlogin() {
    if (userEmail != "" && userPass != "") {
      const userlogin = async () => {
        try {
          const res = await fetch(
            "https://salonify-backend.onrender.com/auth/saloonowner/signin",
            {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userEmail: userEmail,
                userPass: userPass,
              }),
            }
          );

          const output = await res.json();
          console.log(output);
          if (output.success && output.token) {
            localStorage.setItem("authToken", output.token);
            navigate("/services");
          } else {
            alert(output.msg || "Login failed");
          }
        } catch (error) {
          console.error("Login error:", error);
          alert("Login failed. Please try again.");
        }
      };
      userlogin();
    } else {
      alert("empty fields");
    }
  }
  return (
    <>
      <div className="flex flex-col inter-normal">
        <input
          type="text"
          name="userEmail"
          id="userEmail"
          placeholder="Partner Email"
          className="border-b-1 border-black mx-20 my-5 p-2 outline-none"
          value={userEmail}
          onChange={(text) => setuserEmail(text.target.value)}
        />

        <input
          type="password"
          name="userPass"
          id="userPass"
          placeholder="Partner Password"
          className="border-b-1 border-black mx-20 my-5 p-2 outline-none"
          value={userPass}
          onChange={(text) => setuserPass(text.target.value)}
        />
      </div>
      <div className="flex justify-center items-center my-10 flex-col inter-normal">
        <button
          className="bg-[#EEEEEE] px-10 py-3 rounded-lg"
          onClick={verifyandlogin}
        >
          Sign In
        </button>
        <p
          className="mt-10 cursor-pointer"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Don't have an account?
        </p>
      </div>
    </>
  );
}

export default PartnersignIn;
