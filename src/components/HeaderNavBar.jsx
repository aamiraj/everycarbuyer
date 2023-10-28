"use client";

import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Menu from "./Menu";
import Link from "next/link";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/cars"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Cars
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/contact"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/about"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          About
        </Link>
      </Typography>
    </ul>
  );
}

export function HeaderNavBar() {
  //const [openNav, setOpenNav] = React.useState(false);

  // Open and close Nav menus according to window size
  // const handleWindowResize = () =>
  //   window.innerWidth >= 960 && setOpenNav(false);

  // React.useEffect(() => {
  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);

  return (
    <Navbar shadow={false} className="w-full mx-auto px-6 py-10">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Image
          src={Logo}
          alt="every car buyer logo"
          width={242}
          height={35}
          quality={100}
        />
        {/* <NavList /> */}
        <Menu />
        {/* <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton> */}
      </div>
      {/* <Collapse open={openNav}>
        <NavList />
      </Collapse> */}
    </Navbar>
  );
}
