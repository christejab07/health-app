import React from "react";
import { Button, MedTemplate } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Medicine = () => {
  return (
    <div className="bg-gray-100">
      <div className="pt-20 mx-[25%] bg-white w-auto max-md:px-[10%] px-3">
        <div className=" text-2xl font-semibold">
          <FontAwesomeIcon
            icon={faArrowLeft}  
            className="capitalize text-black mt-1 w-12 text-xl"
          />
          <span>Medicine and Predicaments</span>
        </div>
        <div className="flex">
          <span className="h-fit mt-4 font-semibold hover:underline">
            Nearby pharmacy:{" "}
          </span>
          <Button
            title="+kibagabaga"
            containerStyles="border border-black px-5 py-2 rounded-full mx-6 my-2 hover:bg-blue-400 hover:border-blue-400"
            textStyles="capitalize"
          />
          <Button
            title="+kacyiru"
            containerStyles="border border-black px-5 py-2 rounded-full mx-6 my-2 hover:bg-blue-400 hover:border-blue-400"
            textStyles="capitalize"
          />
        </div>
        <div className="flex mb-10">
          <Button
            title="+kimironko"
            containerStyles="border border-black px-5 py-2 rounded-full mx-6 my-2 hover:bg-blue-400 hover:border-blue-400"
            textStyles="capitalize"
          />
          <Button
            title="+muhima"
            containerStyles="border border-black px-5 py-2 rounded-full mx-6 my-2 hover:bg-blue-400 hover:border-blue-400"
            textStyles="capitalize"
          />
          <Button
            title="+nyamirambo"
            containerStyles="border border-black px-5 py-2 rounded-full mx-6 my-2 hover:bg-blue-400 hover:border-blue-400"
            textStyles="capitalize"
          />
        </div>
        <MedTemplate
          imageSrc="/med8.jpeg"
          prix="10000"
          location="kk 123 a1 Musanze, Rwanda"
          manufacturer="Athpara pharmaceuticals"
          name="paracetamol"
        />
        <MedTemplate
          imageSrc="/med5.jpeg"
          prix="10000"
          location="kk 123 a1 Musanze, Rwanda"
          manufacturer="Athpara pharmaceuticals"
          name="paracetamol"
        />
        <MedTemplate
          imageSrc="/med9.jpeg"
          prix="10000"
          location="kk 123 a1 Musanze, Rwanda"
          manufacturer="Athpara pharmaceuticals"
          name="paracetamol"
        />
        <MedTemplate
          imageSrc="/med1.jpeg"
          prix="10000"
          location="kk 123 a1 Musanze, Rwanda"
          manufacturer="Athpara pharmaceuticals"
          name="paracetamol"
        />
      </div>
    </div>
  );
};

export default Medicine;
