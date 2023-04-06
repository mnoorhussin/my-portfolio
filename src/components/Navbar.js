import "tailwindcss/tailwind.css";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-2  fixed top-0 w-full">
      <div className={outfit.className}>
        <div className=" container mx-auto flex justify-between px-40">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-3xl font-bold">Mustafa.</h1>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="mr-6 ">
              <Link href="#hero">
                <div className="hover:text-gray-300 cursor-pointer text-lg">
                  HERO
                </div>
              </Link>
            </div>
            <div className="mr-6">
              <Link href="#skills">
                <div className="hover:text-gray-300 cursor-pointer text-lg">
                  SKILLS
                </div>
              </Link>
            </div>
            <div className="mr-6">
              <Link href="#projects">
                <div className="hover:text-gray-300 cursor-pointer text-lg">
                  PROJECTS
                </div>
              </Link>
            </div>
            <div className="mr-6">
              <Link href="https://github.com/mnoorhussin" target="_blank">
                <AiOutlineGithub size={"2.5em"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
