import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-xl font-semibold dark:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-1 rounded-lg text-white"
      >
        Blogs
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button color="gray" className="w-10 h-10 items-center lg:hidden" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-3 md:order-2">
        <Button
          color="gray"
          className="w-10 h-10 items-center hidden sm:flex"
          pill
        >
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" pill>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as="div" active={path === "/"}>
          <Link to="/" className="flex">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link as="div" active={path === "/about"}>
          <Link to="/about" className="flex">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link as="div" active={path === "/projects"}>
          <Link to="/projects" className="flex">
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
