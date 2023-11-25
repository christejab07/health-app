"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSearch,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from ".";
import Link from "next/link";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="hidden max-md:flex w-full py-4 bg-gray-200">
        <button onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon
              icon={faTimes}
              width={40}
              className="text-2xl ml-72"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              width={40}
              className="text-2xl ml-72"
            />
          )}
        </button>
      </div>
      <div
        className={`flex flex-row px-8 py-3 ${
          click ? `max-md:block fixed bg-fixed` : `max-md:hidden`
        } bg-gray-200 fixed bg-fixed bg-contain w-[100%] z-10 transition-all max-lg:px-1`}
      >
        <Link href="/" className="flex">
          <Button
            title="Home"
            btnType="button"
            onClick={() => setClick(false)}
            containerStyles="text-black text-xl capitalize font-light hover:text-blue-600 transition-all font-sans rounded-sm px-8 py-2 mx-3 max-lg:mx-0 max-md:text-2xl max-md:hover:text-white max-md:hover:bg-black max-md:w-full"
          />
        </Link>
        <Link href="/" className="flex">
          <Button
            title="About"
            btnType="button"
            onClick={() => setClick(false)}
            containerStyles="text-black text-xl capitalize font-light hover:text-blue-600 transition-all font-sans rounded-sm px-8 py-2 mx-3 max-lg:mx-0 max-md:text-2xl max-md:hover:text-white max-md:hover:bg-black max-md:w-full"
          />
        </Link>
        <Link href="/reserve" className="flex">
          <Button
            // title="Contact"
            title="booking"
            btnType="button"
            onClick={() => setClick(false)}
            containerStyles="text-black text-xl capitalize font-light hover:text-blue-600 transition-all font-sans rounded-sm px-8 py-2 mx-3 max-lg:mx-0 max-md:text-2xl max-md:hover:text-white max-md:hover:bg-black max-md:w-full"
          />
        </Link>
        <Link href="/login" className="flex">
          <Button
            // title="Testimonial"
            title="login"
            btnType="button"
            onClick={() => setClick(false)}
            containerStyles="text-black text-xl capitalize font-light hover:text-blue-600 transition-all font-sans rounded-sm px-8 py-2 mx-3 max-lg:mx-0 max-md:text-2xl max-md:hover:text-white max-md:hover:bg-black max-md:w-full"
          />
        </Link>
        <Link
          href="/doctors"
          className="flex border-blue-500 bg-blue-500 rounded-sm px-2 py-2 mx-3 max-lg:mx-0"
        >
          <FontAwesomeIcon
            icon={faSearch}
            width={20}
            className="mt-5 max-md:mt-2"
          />
          <button
            type="button"
            className="px-1 font-bold transition-all no-underline text-black text-lg max-lg:text-sm"
            onClick={() => setClick(false)}
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
            width={35}
            height={30}
            className="border-full ml-5 h-8 my-2"
          />
          <p className="font-bold text-xl my-3 mx-1">English</p>
          <FontAwesomeIcon icon={faChevronDown} width={30} className="mt-5" />
        </Link>
        <Link href="/signup" className="flex">
          <Button
            // title="help"
            title="signup"
            btnType="button"
            onClick={() => setClick(false)}
            containerStyles="text-black text-xl capitalize font-light hover:text-blue-600 transition-all font-sans rounded-sm px-8 py-2 mx-3 max-lg:mx-0 max-md:text-2xl max-md:hover:text-white max-md:hover:bg-black max-md:w-full"
          />
        </Link>
      </div>
    </>
  );
};
// Runner.prototype.gameOver = function()
export default Navbar;
