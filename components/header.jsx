import { NavLink } from "react-router-dom";

function HeaderComponent() {
  return (
    <>
      <div className="flex flex-row p-5 justify-between items-center">
        <div>
          <h2 className="text-4xl">Salonify</h2>
        </div>
        <div>
          <ul className="flex flex-row">
            <li className="mx-10 text-2xl">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="mx-10 text-2xl">
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li className="mx-10 text-2xl">About Us</li>
            <li className="mx-10 text-2xl">Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
