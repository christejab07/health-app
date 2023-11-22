"use client";
import React, { useState } from "react";
import { Button } from "../components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVis = () => {
    setIsVisible(!isVisible);
    if (isVisible) {
      console.log(isVisible);
    }
  };
  return (
    <div className="lg:px-[21%] w-full overflow-x-hidden h-[100vh] pt-20">
      <h1 className="font-bold text-4xl text-blue-500 py-4 transition-all text-center">
        Welcome back to IZINA!
      </h1>
      <div className=" w-[40%] bg-white rounded-full border-gray-500 border-1 mx-[30%] my-3 shadow-md shadow-gray-400">
        <button
          className={`rounded-full py-4 w-[50%] font-semibold ${
            isVisible ? "bg-white border-white" : "bg-blue-500"
          }`}
          onClick={toggleVis}
        >
          Patient
        </button>
        <button
          className={`rounded-full w-[50%] py-4 font-semibold ${
            isVisible ? "bg-blue-500 border-gray-500" : ""
          }`}
          onClick={toggleVis}
        >
          Doctor
        </button>
      </div>

      <form
        action=""
        method="post"
        className="flex flex-col w-[65%] mx-[17%] bg-white px-4 py-2 rounded-sm"
      >
        <div className="flex">
          <FontAwesomeIcon
            icon={faEnvelope}
            width={100}
            className="text-gray-300 mt-10 hover:text-blue-500 w-12"
            title="email"
          />
          <input
            type="tel"
            name="email"
            id="phoneNumber"
            placeholder="Enter email or phone number"
            required
            className="border-[1px] border-gray-300 text-left px-3 py-3 rounded-md my-5 w-[90%]"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
          />
        </div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faKey}
            width={100}
            className="text-gray-300 mt-10 hover:text-blue-500 mx-0 w-12"
            title="password"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            required
            className="text-left border-gray-300 border-[1px] px-3 py-3 rounded-md my-5 w-[90%]"
            pattern="[a-z0-9._%+-]{6, 15}"
          />
        </div>
        <div className="flex px-6">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="capitalize inline text-left mx-2"
          />
          <span >Remember Me</span>
          <Link
            href="/"
            className="hover:underline cursor-pointer text-right text-blue-500 ml-36"
          >
            Forgot Password?
          </Link>
        </div>
        <Button
          btnType="submit"
          title="login now"
          containerStyles="rounded-md bg-blue-500 font-bold text-xl text-white capitalize py-3 my-5 ml-6"
        />
        <p className="capitalize text-gray-500 mx-[12%] my-2">
          Don't have an account?{" "}
          <Link href={"/signup"} className="underline text-blue-500">
            signup now
          </Link>
        </p>
      </form>
    </div>
  );
}
export default Login;
