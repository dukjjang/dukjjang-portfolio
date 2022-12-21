import Link from "next/link";
import Image from "next/image";
import DarkModeToggleButton from "../home/dark-mode-toggle";
import Logo from "../Logo";

const Header = () => {
  const links = [
    { name: "RESUME", path: "/" },
    { name: "Project", path: "/project" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="fixed top-0 w-full text-black bg-transparent backdrop-blur-sm z-50 ">
      <div className=" mx-auto flex md:py-10 md:px-20 lg:px-40 items-center">
        <div className="flex title-font font-medium justify-center items-center text-black md:mb-4 mb-0">
          <Logo />
        </div>
        <nav className=" text-xs gap-5 font-normal  md:text-[15px]  md:ml-auto flex items-center text-black dark:text-white justify-center">
          <Link href="/">
            <span>Resume</span>
          </Link>
          <Link href="/projects">
            <span>Project</span>
          </Link>
          <Link href="/about-me">
            <span>Contact</span>
          </Link>
        </nav>
        <DarkModeToggleButton />
      </div>
    </header>
  );
};
export default Header;