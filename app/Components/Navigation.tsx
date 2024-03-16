"use client"

import React from "react";
import {Props} from "@/app/interface";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {BiCart, BiHome, BiSolidCart, BiSolidHome} from "react-icons/bi";
import {ImProfile} from "react-icons/im";
import {BsPerson, BsPersonFill} from "react-icons/bs";

export const Navigation: React.FC<Props> = ({ children }: Props) => {
    const activePage = usePathname().split('/')[1];

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col items-center py-6">
                {children}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <div className="btm-nav bg-primary-content lg:hidden">
                    <Link href={"/"}>
                        <button className={"text-primary " + (activePage === "" ? "active": "")}>
                            <BiSolidHome size={25}/>
                        </button>
                    </Link>
                    <Link href={"/cart"}>
                        <button className={"text-primary " + (activePage === "cart" ? "active" : "")}>
                            <BiSolidCart size={25}/>
                        </button>
                    </Link>
                    <Link href={"/profile"}>
                        <button className={"text-primary " + (activePage === "profile" ? "active": "")}>
                            <BsPersonFill size={25}/>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu px-4 py-8 min-h-full bg-base-200 text-base-content gap-8">
                    <li>
                        <Link href={"/"}><BiSolidHome size={25} /></Link>
                    </li>
                    <li>
                        <Link href={"/cart"}><BiSolidCart size={25} /></Link>
                    </li>
                    <li>
                        <Link href={"/profile"}><BsPersonFill size={25} /></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}