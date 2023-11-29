import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full">
      <div className="container flex h-[70px] items-center justify-between">
        <span>
          <Link href="/" className="text-[30px] font-bold tracking-wider">
            MadFlix
          </Link>
        </span>
        <div className="flex items-center gap-5">
          <Link href="/">Home</Link>
          <span>
            <ThemeToggle />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
