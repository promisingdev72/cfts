import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import MobileMenu from "./mobile_menu";

import images from "~/images";

const {logo} = images;



export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="relative lg:pr-40 pr-0 pt-4 pb-3">
      <ul className="hidden justify-end items-center lg:flex">
        <Link href="/">
          <a>
            <li className="flex items-center mr-12">
              <IoLogoTwitter className="text-white text-2xl" />
            </li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className="flex items-center mr-11">
              <GrFacebookOption className="text-white text-2xl" />
            </li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className="flex items-center mr-11">
                <IoLogoLinkedin className="text-white text-2xl"/>
            </li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className="flex items-center mr-32">
              <IoLogoYoutube className="text-white text-2xl" />
            </li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className="flex items-center mr-6 text-white">
              NEWSLETTER
            </li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className="flex items-center mr-6 text-white">
              CONTACT
            </li>
          </a>
        </Link>
        <li className="flex items-center mr-6 relative">
          <input
            type="text"
            className="focus: outline-none placeholder:italic rounded-full pl-3 pr-8 h-8 w-60 bg-color1 text-white border border-white"
          />
          <IoSearch className="text-white text-2xl absolute right-2 top-1" />
        </li>
      </ul>
      <ul className="lg:hidden flex justify-end px-3">
        <li className="flex text-4xl cursor-pointer" onClick={toggleMenu}>
          {
            isMenuOpen?<IoClose className="ml-auto primary-color text-4xl text-white" />:<IoMenu className="ml-auto primary-color text-4xl text-white" />
          }
        </li>
      </ul>
      {isMenuOpen && <MobileMenu />}
    </div>
  );
}