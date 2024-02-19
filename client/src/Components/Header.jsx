import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 bg-gray-300 mx-8 my-4 rounded-xl">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-2xl font-semibold dark:text-white"
      >
        Buzz
        <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg">
          Byte
        </span>
      </Link>
      <Navbar.Toggle className="lg:hidden"/>
      <Navbar.Collapse className="my-2">
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"}as={'div'}>
          <Link to="/about">About</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/Projects"}as={'div'}>
          <Link to="/Projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <form>
        <TextInput
          type="text"
          placeholder="Search"
          className="hidden lg:inline"
          rightIcon={AiOutlineSearch}
        />
      </form>
      <Button
        className="w-12 h-10  border-black lg:hidden dark:border-white"
        color="gray"
        pill
      >
        <AiOutlineSearch className="" />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          color="gray"
          className="border-black w-12 h-10 sm:inline dark:border-white"
          pill
        >
          <FaMoon className="" />
        </Button>

        <Link to="/signin">
          <Button className="border-black" gradientDuoTone="purpleToBlue">
            Sign In
          </Button>
        </Link>
        
      </div>
      
      
    </Navbar>
  );
}

export default Header;
