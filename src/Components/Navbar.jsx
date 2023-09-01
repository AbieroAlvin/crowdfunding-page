import { BrowserRouter } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  return (
    <>
      <BrowserRouter>
        <nav className="bg-transparent">
          <div className="flex items-center font-medium justify-around">
            <div className="p-5 md:w-auto w-full flex justify-between items-center">
              <div className="font-bold md:text-3xl  text-3xl md:cursor-pointer font-primary text-white">
                crowdfund
              </div>
              <div onClick={handleClick} className="md:hidden z-40">
                {open ? (
                  <FaTimes size={25} className="text-white cursor-pointer" />
                ) : (
                  <FaBars size={25} className="text-white cursor-pointer" />
                )}
              </div>
            </div>
            <ul className="md:flex hidden items-center gap-8 font-primary text-white">
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Discover</li>
              <li className="cursor-pointer">Get Started</li>
            </ul>

            {/* Overlay */}

            {open ? (
              <div className="bg-black/60 fixed w-full h-screen z-20 top-0 left-0"></div>
            ) : (
              ""
            )}

            {/* Mobile */}
            <ul
              className={`md:hidden bg-white absolute w-[80%] top-28 rounded-xl space-y-4 py-8 z-50 p-6 duration-500 ease-in ${
                open ? "left-15" : "left-[-300%]"
              }`}
            >
              <li className="border-b-[var(--Dark-gray)] border-b-[1px] pb-6 pl-2 cursor-pointer">
                About
              </li>
              <li className="border-b-[var(--Dark-gray)] border-b-[1px] pb-6 pl-2 cursor-pointer">
                Discover
              </li>
              <li className="pl-2 cursor-pointer">Get Started</li>
            </ul>
          </div>
        </nav>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
