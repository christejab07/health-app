"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Image from "next/image";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faMessage,
  faPhone,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farstar } from "@fortawesome/free-regular-svg-icons";
import { Button } from "../components";
function Doctor() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="flex px-20 py-2 bg-no-repeat bg-cover max-md:px-5 bg-gray-100">
      <div className="flex-row flex capitalize w-[100%] px-[28%] max-md:px-[10%]">
        <div className="pt-20 bg-white px-5">
          <div className="flex flex-row">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="capitalize text-black mt-1 w-12 text-xl"
            />
            <h1>Dr. Jordan Collins</h1>
          </div>
          <div className="px-[30%] w-full pb-3">
          <Image
            src="/doctor4.avif"
            alt="doc qwerty"
            width={200}
            height={200}
          />
          </div>
          <button
            type="button"
            name="audio"
            className="bg-red-500 text-white px-3 py-2 rounded-md mx-[10px] max-md:text-[6px]"
          >
            <FontAwesomeIcon icon={faPhone} className="w-8" />
            <span>Audio Call</span>
          </button>
          <button
            type="button"
            name="video"
            className="bg-green-500 text-white px-3 py-2 rounded-md mx-[10px] max-md:text-[6px]"
          >
            <FontAwesomeIcon icon={faVideoCamera} className="w-8" />
            <span>Video Call</span>
          </button>
          <button
            type="button"
            name="audio"
            className="bg-blue-500 text-white px-3 py-2 rounded-md mx-[10px] max-md:text-[6px]"
          >
            <FontAwesomeIcon icon={faMessage} className="w-8" />
            <span>Message</span>
          </button>
          <h3 className="capitalize font-bold text-center text-xl my-2">pediatrist & bone specialist</h3>
          <h4 className="capitalize font-light text-center text-sm my-2">king faisal hospital, Rwanda</h4>
          <Button
            textStyles="capitalize text-sm text-white"
            title="book an appointment"
            containerStyles="rounded-full bg-red-500 px-12 py-2 my-2 mx-[20%]"
          />

          <h2 className="font-bold">About</h2>
          <p className="font-light text-sm py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
            placeat sit quasi doloremque in voluptas mollitia eum facilis eaque.
            Ea beatae ut itaque delectus accusantium expedita earum odio quos
            veniam?
          </p>
          <nav className="flex flex-row text-sm my-5">
            <nav className="pr-12 border-r-4 border-r-gray-400">
              <h1 className="font-bold pb-4">patients</h1>
              <p className="text-red-500">
                <span className="text-[50px]">15</span>k
              </p>
            </nav>
            <nav className="px-12 border-r-4 border-r-gray-400">
              <h1 className="font-bold pb-4">experience</h1>
              <p className="text-blue-500">
                <span className="text-[50px]">8</span>years+
              </p>
            </nav>
            <nav className="px-12">
              <h1 className="font-bold pb-4">rating</h1>
              <p className="text-[50px] text-green-500">4.9</p>
            </nav>
          </nav>
          <h1 className="font-bold">reviews</h1>
          <div>
            <h1 className="font-bold">Angele</h1>
            <div className="py-1">
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={farstar} className="text-gray-300" />
            </div>
            <p className="font-light text-sm py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum repudiandae assumenda voluptatibus dicta porro fuga
              consequatur ullam quia sapiente ad modi id qui soluta eligendi,
              tenetur molestias nesciunt nihil nam!
            </p>
          </div>
          <div>
            <h1 className="font-bold">Marie</h1>
            <div className="py-1">
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={farstar} className="text-gray-300" />
            </div>
            <p className="font-light text-sm py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum repudiandae assumenda voluptatibus dicta porro fuga
              consequatur ullam quia sapiente ad modi id qui soluta eligendi,
              tenetur molestias nesciunt nihil nam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
