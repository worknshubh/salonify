import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UsersignIn() {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const navigate = useNavigate();
  function verifyandsgnin() {
    if (userEmail != "" && userPass != "") {
      const userlogin = async () => {
        const res = await fetch("http://127.0.0.1:4444/auth/user/signin", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: userEmail,
            userPass: userPass,
          }),
        });
        const output = await res.json();
        console.log(output);
        if (output.msg == "Login Successful") {
          navigate("/services");
        }
      };
      userlogin();
    } else {
      alert("Empty Fields");
    }
  }
  return (
    <>
      <div className="flex flex-col inter-normal">
        <input
          type="text"
          name="userEmail"
          id="userEmail"
          placeholder="User Email"
          className="border-b-1 border-black mx-20 my-5 p-2 outline-none"
          value={userEmail}
          onChange={(text) => setUserEmail(text.target.value)}
        />

        <input
          type="password"
          name="userPass"
          id="userPass"
          placeholder="User Password"
          className="border-b-1 border-black mx-20 my-5 p-2 outline-none"
          value={userPass}
          onChange={(text) => setUserPass(text.target.value)}
        />
      </div>
      <div className="flex justify-center items-center my-10 flex-col inter-normal">
        <button
          className="bg-[#EEEEEE] px-10 py-3 rounded-lg"
          onClick={verifyandsgnin}
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

export default UsersignIn;
