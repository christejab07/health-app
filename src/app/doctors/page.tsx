import React from "react";
import { Button, DoctorTemplate } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Doctors = () => {
  return (
    <>
      <div className="pt-20 px-[20%] max-md:px-0">
        <div className="refine">
          <span>Refine by Tag: </span>
          <Button
            title="+pediatrician"
            containerStyles="border-[1px] border-black px-5 py-2 rounded-full mx-8 my-6 hover:bg-blue-400 hover:border-blue-400"
            textStyles="capitalize"
          />
          <Button
            title="+neurologist"
            containerStyles="border-[1px] border-black px-5 py-2 rounded-full mx-8 my-6 hover:bg-blue-400 hover:border-blue-400"
            textStyles="capitalize"
          />
          <Button
            title="+cardiologist"
            containerStyles="border-[1px] border-black px-5 py-2 rounded-full mx-8 my-6 hover:bg-blue-400 hover:border-blue-400"
            textStyles="capitalize"
          />
          <Button
            title="+oncologist"
            containerStyles="border-[1px] border-black px-5 py-2 rounded-full mx-8 my-6 hover:bg-blue-400 hover:border-blue-400"
            textStyles="capitalize"
          />
          <Button
            title="+general practitioner"
            containerStyles="border-[1px] border-black px-5 py-2 rounded-full mx-8 my-6 hover:bg-blue-400 hover:border-blue-400"
            textStyles="capitalize"
          />
        </div>
        <DoctorTemplate
          name="virat chaturvedi"
          imageSrc="/doctor1.png"
          specification="neurologist"
          hospital="St.augustin hospital, rwanda"
        />
        <hr className="border-gray-300 rounded-md w-full border-4" />
        <DoctorTemplate
          name="alya darmas"
          imageSrc="/doctor2.png"
          specification="Cardiologist"
          hospital="king faisal hospital, rwanda"
        />
        <hr className="border-gray-300 rounded-md w-full border-4" />
        <DoctorTemplate
          name="Frank gall"
          imageSrc="/doctor8.avif"
          specification="pediatrician"
          hospital="Hopital de Ruhengeri, Rwanda"
        />
        <hr className="border-gray-300 rounded-md w-full border-4" />
        <DoctorTemplate
          name="anne marie"
          imageSrc="/doctor4.avif"
          specification="oncologist"
          hospital="Butaro hospital, rwanda"
        />
        <hr className="border-gray-300 rounded-md w-full border-4" />
        <DoctorTemplate
          name="Shukriya Hazim"
          imageSrc="/doctor9.jpeg"
          specification="general practitioner"
          hospital="St.Ignace hospital, Senegal"
        />
      </div>
      <div className="flex py-3 capitalize max-md:hidden">
        <p className="text-gray-500 px-20">
          <span>Copyright 2023 </span>
          <span> all rights reserved</span></p>
        <p className="text-blue-500 px-48">
          <FontAwesomeIcon icon={faQuestionCircle} className="px-1" />
          <span>help center</span>
        </p>
        <p className="text-gray-500 px-20">
          <span>follow us on </span>
          <FontAwesomeIcon icon={faLinkedin} className="px-1" />
          <FontAwesomeIcon icon={faFacebook} className="px-1" />
          <FontAwesomeIcon icon={faTwitter} className="px-1" />
          <FontAwesomeIcon icon={faInstagram} className="px-1" />
        </p>
      </div>
    </>
  );
};

export default Doctors;
