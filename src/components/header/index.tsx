import { useState } from "react";

import Link from 'next/link'
import Image from "next/image";


// import MobileMenu from "./mobile_menu";
import TopBar from "./top_bar";

import menuItems from "./menu_items.json";
import images from '~/images';
const { logo } = images;

export default function Header(){
    
    return(
        <>
            <div className='bg-color1'>
                <TopBar />
            </div>
            <div className="h-2/3 lg:pb-0 flex justify-around lg:p-3">
                <div className="lg:block hidden">
                    <Image src={logo}/>
                </div>
                <div className="hidden justify-center lg:flex">
                    <ul className="flex mt-6 items-end">
                        {menuItems.map((item) => (
                        <li
                            className="mr-12 font-basic text-color1 text-2xl flex"
                            key={item.label}
                        >
                            <Link href={item.url}>
                                <a className="triangle relative">{item.label}</a>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
