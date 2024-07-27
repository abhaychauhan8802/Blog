import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

import { toggleTheme } from "../redux/theme/themeSlice.js";
import { signoutSuccess } from "../redux/user/userSlice.js";

const Header = () => {
  const path = useLocation().pathname;

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });

      const data = res.json();

      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-xl font-semibold dark:text-white "
      >
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 mr-1 rounded-lg text-white">
          Blog
        </span>
        Posts
      </Link>
      <div className="md:order-2 flex gap-3">
        <div>
          <form>
            <TextInput
              type="text"
              placeholder="Search..."
              rightIcon={AiOutlineSearch}
              className="hidden lg:inline"
            />
          </form>

          <Button
            color="gray"
            className="w-10 h-10 items-center lg:hidden"
            pill
          >
            <AiOutlineSearch />
          </Button>
        </div>

        <div className="flex gap-3 ">
          <Button
            color="gray"
            className="w-10 h-10 items-center hidden sm:flex"
            pill
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to="/dashboard?tab=profile">
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline pill>
                Sign In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
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
