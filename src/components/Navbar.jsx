import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <header className="sticky top-0 items-center border-b border-slate-800 bg-[#211b22] px-6">
      <div className="w-ful mb-2 flex items-center pt-4 ">
        <nav className="items-centers w-full justify-between text-stone-100 md:flex">
          <div className="flex items-center justify-between">
            <h1
              className="tracking-logoSetwidest text-2xl uppercase first-letter:text-4xl first-letter:text-amber-300"
              onClick={() => {
                setMobile(false);
              }}
            >
              <NavLink to="/">portfolio</NavLink>
            </h1>

            {mobile ? (
              <span className=" cursor-pointer rounded md:hidden ">
                <AiOutlineClose
                  size={25}
                  color={"white"}
                  onClick={handleMobile}
                />
              </span>
            ) : (
              <span className=" cursor-pointer rounded md:hidden ">
                <AiOutlineMenu
                  size={25}
                  color={"white"}
                  onClick={handleMobile}
                />
              </span>
            )}
          </div>
          <div className="mt-3">
            <ul
              className={
                !mobile
                  ? "hidden uppercase hover:text-stone-400 md:flex"
                  : "h-fit pt-6 text-center uppercase hover:text-stone-400 md:flex md:p-0"
              }
            >
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "" : "")}
              >
                <li
                  className="mx-1  border-slate-800 py-1 text-lg hover:rounded-md hover:bg-slate-700 hover:text-stone-200 md:border md:px-2 md:duration-500"
                  onClick={handleMobile}
                >
                  home
                </li>
              </NavLink>
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? "" : "")}
              >
                <li
                  className="mx-1 border-slate-800 py-1 text-lg hover:rounded-md hover:bg-slate-700 hover:text-stone-200 md:border md:px-2 md:duration-500"
                  onClick={handleMobile}
                >
                  skills
                </li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "" : "")}
              >
                <li
                  className="mx-1 border-slate-800 py-1 text-lg  hover:rounded-md hover:bg-slate-700 hover:text-stone-200 md:border md:px-2 md:duration-500"
                  onClick={handleMobile}
                >
                  about
                </li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "" : "")}
              >
                <li
                  className="mx-1 border-slate-800 py-1 text-lg hover:rounded-md  hover:bg-slate-700 hover:text-stone-200 md:border md:px-2 md:duration-500"
                  onClick={handleMobile}
                >
                  contact
                </li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
