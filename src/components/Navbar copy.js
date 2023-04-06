import "tailwindcss/tailwind.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavItem = ({ href, text, active }) => (
  <Link href={href}>
    <div
      className={`block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-500 mr-10 ${
        active ? "font-bold" : ""
      }`}>
      {text}
    </div>
  </Link>
);

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6 sticky top-0 z-50">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <div className="font-semibold text-xl tracking-tight text-gray-800">
            My Portfolio
          </div>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          menuOpen ? "" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          <NavItem href="/" text="Home" active={router.pathname === "/"} />
          <NavItem
            href="/about"
            text="About"
            active={router.pathname === "/about"}
          />
          <NavItem
            href="/skills"
            text="Skills"
            active={router.pathname === "/skills"}
          />
          <NavItem
            href="/projects"
            text="Projects"
            active={router.pathname === "/projects"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
