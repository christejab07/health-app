"use client";
import React, { useState } from "react";
import { Button } from "../components";
import Link from "next/link";

const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVis = () => {
    setIsVisible(!isVisible);
    if (isVisible) {
      console.log(isVisible);
    }
  };
  return (
    <div className="lg:px-[23%] w-full overflow-x-hidden pt-20 max-md:pt-3">
      <h1 className="font-bold text-4xl text-blue-500 py-4 transition-all text-center max-md:pt-3">
        Welcome to IZINA!
      </h1>
      <div className=" w-[40%] bg-white rounded-full border-gray-500 border-1 mx-[30%] my-3 shadow-md shadow-gray-400 max-md:w-[80%] max-md:mx-[10%]">
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
        className="flex flex-col w-[65%] mx-[20%] bg-white px-4 py-2 rounded-sm max-md:mx-1 max-md:w-full"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter full name"
          required
          className="border-[1px] border-gray-300 text-left px-5 py-2 rounded-md my-5"
        />
        <input
          type="text"
          name="nationalID"
          id="nationalID"
          placeholder="Enter National ID"
          required
          className="border-[1px] border-gray-300 text-left px-5 py-2 rounded-md my-5"
        />
        <input
          type="tel"
          name="email"
          id="phoneNumber"
          placeholder="Enter email or phone number"
          required
          className="border-[1px] border-gray-300 text-left px-5 py-2 rounded-md my-5"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          required
          className="border-[1px] border-gray-300 text-left px-5 py-2 rounded-md my-5"
        />
        <p className="capitalize">
          By Signing up you agree to our{" "}
          <Link href="/" className="underline cursor-pointer">
            {" "}
            terms{" "}
          </Link>
          ,{" "}
          <Link href="/" className="underline cursor-pointer">
            privacy policy
          </Link>{" "}
          and{" "}
          <Link href="/" className="underline cursor-pointer">
            cookies policy
          </Link>
        </p>
        <Button
          btnType="submit"
          title="sign up"
          containerStyles="rounded-md bg-blue-500 font-bold text-xl text-white capitalize py-2 my-5"
        />
        <p className="capitalize text-gray-500 mx-[20%] mt-2 max-md:mx-8">
          already have an account?{" "}
          <Link href="/login" className="underline text-blue-500">
            sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
