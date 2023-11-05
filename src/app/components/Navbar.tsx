"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from ".";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-row px-8 py-4 max-md:flex-col bg-white fixed bg-fixed bg-contain w-[100%] z-10">
        <Link href="/" className="flex">
          <Image
            src="/charity.png"
            alt="our logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
        <Link href="/" className="flex">
          <Button
            title="Home"
            btnType="button"
            containerStyles="text-black text-xl capitalize font-light hover:text-blue-600 transition-all font-sans rounded-sm px-8 mx-3"
          />
        </Link>
        <Link href="/" className="flex">
          <Button
            title="About"
            btnType="button"
            containerStyles="text-black text-xl capitalize font-light hover:text-blue-600 transition-all font-sans rounded-sm px-8 mx-3"
          />
        </Link>
        <Link href="/" className="flex">
          <Button
            title="Contact"
            btnType="button"
            containerStyles="text-black text-xl capitalize font-light hover:text-blue-600 transition-all font-sans rounded-sm px-8 mx-3"
          />
        </Link>
        <Link href="/" className="flex">
          <Button
            title="Testimonial"
            btnType="button"
            containerStyles="text-black text-xl capitalize font-light hover:text-blue-600 transition-all font-sans rounded-sm px-8 mx-3"
          />
        </Link>
        <Link
          href="/"
          className="flex border-blue-400 bg-blue-400 rounded-md px-2 mx-10"
        >
          <FontAwesomeIcon icon={faSearch} width={20} className="mt-4" />
          <button
            type="button"
            className="px-1 font-bold border-1 transition-all no-underline text-black text-lg font-sans hover:underline"
          >
            Find Doctors
          </button>
        </Link>
        <Link
          href="/"
          className="flex hover:opacity-75 opacity-100 transition-opacity"
        >
          <Image
            src="/britain.png"
            alt="britain map"
            width={40}
            height={30}
            className="border-full ml-5 h-8 my-2"
          />
          <p className="font-bold text-xl my-3 mx-1">English</p>
          <FontAwesomeIcon icon={faChevronDown} width={30} className="mt-4" />
        </Link>
        <Link href="/" className="flex">
          <Button
            title="help"
            btnType="button"
            containerStyles="text-black text-xl capitalize font-light hover:text-blue-600 transition-all font-sans rounded-sm px-8 mx-3"
          />
        </Link>
      </div>
    </>
  );
};
// Runner.prototype.gameOver = function()
export default Navbar;
