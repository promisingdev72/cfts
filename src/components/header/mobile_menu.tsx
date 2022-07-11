import Image from "next/image";
import Link from "next/link";

import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

import images from "~/images";

import menuItems from "./menu_items.json";

export default function MobileMenu() {
  return (
    <div className="primary-back absolute w-full z-10 bg-color1 h-screen opacity-90 py-5">
      <div className="flex justify-around px-3 py-3">
        <IoLogoTwitter className="text-white text-2xl" />
        <GrFacebookOption className="text-white text-2xl" />
        <IoLogoLinkedin className="text-white text-2xl" />
        <IoLogoYoutube className="text-white text-2xl" />
      </div>
      <div className="flex justify-around px-3 py-3">
      <Link href="/">
        <a>
          <div className="text-white">NEWSLETTER</div>
        </a>
      </Link>
      <Link href="/">
        <a>
          <div className="text-white">CONTACT</div>
        </a>
      </Link>
      </div>
      <div className="flex relative justify-center px-2">
        <input
          type="text"
          className="focus: outline-none placeholder:italic rounded-full pl-4 pr-8 h-8 w-full bg-color1 input-back text-white border border-white"
        ></input>
        <IoSearch className="text-white text-2xl absolute right-3 top-1" />
      </div>
      <div className="pl-6 pb-6">
        {menuItems.map((item) => (
            <Link href={item.url}>
                <a>
                    <div
                        className="font-BarlowBold text-white text-xm mt-6"
                        key={item.label}
                    >
                        {item.label}
                    </div>
                </a>
          </Link>
        ))}
      </div>
    </div>
  );
}