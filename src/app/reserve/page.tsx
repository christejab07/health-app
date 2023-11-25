import {
  faArrowLeft,
  faHospitalUser,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "../components";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";

const Booking = () => {
  return (
    <div className="pt-20 w-[70%] mx-[15%] max-md:w-full max-md:mx-0 max-md:pt-3">
      <h1 className="text-center text-2xl capitalize font-bold hover:text-blue-500 py-2 cursor-pointer">
        <FontAwesomeIcon icon={faArrowLeft} width={30} />{" "}
        <span>booking & consulting</span>
      </h1>
      <form
        action=""
        method="post"
        className="flex flex-col w-[65%] mx-[17%] px-4 py-2 rounded-sm max-md:w-full max-md:mx-0"
      >
        <div className="flex">
          <FontAwesomeIcon
            icon={faHospitalUser}
            width={100}
            className="text-gray-700 mt-10 hover:text-blue-500 w-8"
            title="doctor"
          />
          <input
            type="tel"
            name="docName"
            id="docName"
            placeholder="doctor's name"
            required
            className="border-[1px] border-gray-300 text-left px-3 py-3 rounded-md my-5 w-[90%]"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
          />
        </div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faCalendar}
            width={100}
            className="text-gray-700 mt-10 hover:text-blue-500 w-8"
            title="date/time"
          />
          <input
            type="date"
            name="date"
            id="date"
            placeholder="date and time"
            required
            className="text-left border-gray-300 border-[1px] px-3 py-3 rounded-md my-5 w-[90%]"
            pattern="[a-z0-9./]{6, 15}"
          />
        </div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faServicestack}
            width={100}
            className="text-gray-700 mt-10 hover:text-blue-500 w-8"
            title="service"
          />
          <input
            type="text"
            name="service"
            id="service"
            placeholder="service's name"
            required
            className="text-left border-gray-300 border-[1px] px-3 py-3 rounded-md my-5 w-[90%]"
            pattern="[a-z0-9./]{6, 15}"
          />
        </div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faNoteSticky}
            width={100}
            className="text-gray-700 mt-10 hover:text-blue-500 w-8"
            title="symptoms"
          />
          <input
            type="text"
            name="symptoms"
            id="symptoms"
            placeholder="symptoms"
            required
            className="text-left border-gray-300 border-[1px] px-3 py-3 rounded-md my-5 w-[90%]"
            pattern="[a-z0-9./]{6, 15}"
          />
        </div>
        <Button
          btnType="submit"
          title="book an appointment"
          containerStyles="rounded-md bg-blue-500 font-bold text-xl text-white capitalize py-3 mx-6 my-3"
        />
      </form>
      <h1 className="font-bold text-2xl capitalize text-center py-4">
        appointment status
      </h1>
      <div className="flex capitalize">
        <ul className="py-3 px-5 mx-2 w-[25%] max-[960px]:px-0 max-md:w-[33.33%]">
          <li className="font-bold my-2">Doctor</li>
          <li className="my-4">Dr.Darmas</li>
          <li className="my-4">Dr.chaturvedi</li>
          <li className="my-4">Dr.Gall</li>
        </ul>
        <ul className="py-3 px-5 mx-2 w-[25%] max-[960px]:px-0 max-md:hidden">
          <li className="font-bold my-2">Service</li>
          <li className="my-4">cardiologist</li>
          <li className="my-4">neurologist</li>
          <li className="my-4">pediatrician</li>
        </ul>
        <ul className="py-3 px-5 mx-2 w-[25%] max-[960px]:px-0 max-md:w-[33.33%]">
          <li className="font-bold my-2">Date&Time</li>
          <li className="my-4">12/12/2023</li>
          <li className="my-4">25/11/2023</li>
          <li className="my-4">10/10/2023</li>
        </ul>
        <ul className="py-3 px-5 mx-2 w-[25%] max-[960px]:px-0 max-md:w-[33.33%]">
          <li className="font-bold my-2 text-center">Status</li>
          <li className="my-3">
            <Button
              title="pending"
              btnType="button"
              containerStyles="text-white font-thin capitalize text-center w-[100%] px-5 py-1 rounded-full bg-blue-500"
            />
          </li>
          <li className="my-3">
            <Button
              title="cancelled"
              btnType="button"
              containerStyles="text-white font-thin capitalize text-center w-[100%] px-5 py-1 rounded-full bg-red-500"
            />
          </li>

          <li className="my-3">
            <Button
              title="done"
              btnType="button"
              containerStyles="text-white font-thin capitalize text-center w-[100%] px-5 py-1 rounded-full bg-emerald-300"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Booking;
