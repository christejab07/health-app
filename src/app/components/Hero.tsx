import React, { useState } from "react";
import Image from "next/image";
import { Button } from ".";
import Link from "next/link";
const Hero = () => {
  const [isShow, setIsShow] = useState(false);
  const showDrop = () => {
    setIsShow(!isShow);
    console.log(isShow);
  };
  return (
    <>
      <div className="flex px-20 py-2 bg-hero-bg bg-no-repeat bg-cover opacity-90">
        <div className="flex-row flex padding-x text-white capitalize lg:w-[60%]">
          <div className="pt-20">
            <h1 className="font-medium font-sans text-8xl py-10">
              get best doctors in{" "}
              <span className="font-extrabold">Medicine</span>!
            </h1>
            <p className="text-3xl py-6 text-black">The world of modern medicine</p>
            <p className="text-lg font-sans text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, provident ea. Ut deserunt blanditiis animi. Nesciunt
              quibusdam expedita harum consequuntur dolore architecto voluptas
              accusamus reprehenderit vitae, repellat consequatur accusantium
              ipsum.
            </p>
            <Button
              title="get started now"
              containerStyles="rounded-sm bg-white p-3 m-10"
              textStyles="text-black font-serif text-xl uppercase font-bold"
              onClick={showDrop}
            />
          </div>
        </div>
        <div className={`bg-white text-black w-[20%] mt-[4.6rem] ml-[4.3rem] h-[40vh] ${isShow? '': 'hidden'}`}>
          <Link href="/" className="flex hover:bg-gray-200">
            <Image
              src="/britain.png"
              alt="britain map"
              width={40}
              height={30}
              className="ml-5 h-8 my-2"
            />
            <p className="font-bold text-xl my-3 mx-2">English</p>
          </Link>
          <Link href="/" className="flex hover:bg-gray-200">
            <Image
              src="/france.png"
              alt="france map"
              width={40}
              height={30}
              className="ml-5 h-8 my-2"
            />
            <p className="font-bold text-xl my-3 mx-2">French</p>
          </Link>
          <Link href="/" className="flex hover:bg-gray-200">
            <Image
              src="/france.png"
              alt="france map"
              width={40}
              height={30}
              className="ml-5 h-8 my-2"
            />
            <p className="font-bold text-xl my-3 mx-2">Francais</p>
          </Link>
          <Link href="/" className="flex hover:bg-gray-200">
            <Image
              src="/spain.png"
              alt="spain map"
              width={40}
              height={30}
              className="ml-5 h-8 my-2"
            />
            <p className="font-bold text-xl my-3 mx-2">Espagnol</p>
          </Link>
          <Link href="/" className="flex hover:bg-gray-200">
            <Image
              src="/german.png"
              alt="german map"
              width={40}
              height={30}
              className="ml-5 h-8 my-2"
            />
            <p className="font-bold text-xl my-3 mx-2">Deutsch</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
