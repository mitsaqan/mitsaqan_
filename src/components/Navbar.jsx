import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "../assets/logoo.png";
import { navItems } from "../constants";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-11 w-11 mr-1" src={logoImg} alt="logo" />
              <span className="text-xl tracking-tight">Mitsaqan</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label} </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex  justify-center space-x-12 items-center">
              <a
                href="#"
                className="bg-gradient-to-r from-green-500 to-green-800 py-2 px-3 rounded-md"
              >
                Get In Touch
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label} </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
