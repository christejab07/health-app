import React from "react";
import Image from "next/image";
import { Button } from ".";
const Description = () => {
  return (
    <div className="flex flex-col p-10">
      <h1 className="align-middle text-2xl mb-6 text-center font-bold">
        About us
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste
        eveniet deserunt veniam officia veritatis? Perspiciatis quibusdam neque,
        esse ipsam eos excepturi quidem debitis saepe id fugit. Quia, minima
        debitis.
      </p>
      <hr className="w-[20%] mx-[40%] my-5 border-blue-500 border-[1px] max-md:w-[80%] max-md:mx-[10%]" />
      <div className="flex flex-row max-md:flex-col-reverse">
        <div className="w-[60%] max-md:w-full">
          <h1 className="font-serif uppercase font-bold my-10 text-blue-500 text-4xl">
            welcome to izina
          </h1>
          <h1 className="font-sans uppercase font-bold my-5 text-4xl">
            why should you choose us?
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iste
            id hic laboriosam quaerat rem illum repellat inventore, eum, numquam
            vel officia qui doloremque nesciunt? Modi nemo animi quas.
            Dignissimos.
          </p>
          <Button title="book an appointment" containerStyles="rounded-full bg-blue-400 py-3 px-8 mx-10 my-10" textStyles="text-white capitalize font-bold text-lg" />
        </div>
        <div className="w-[50%]">
          <Image src="/doctor1.png" alt="doctor1" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Description;
