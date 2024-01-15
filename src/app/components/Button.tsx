import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "../../../types";
const Button = ({
  title,
  containerStyles,
  btnType,
  textStyles,
  onClick,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      disabled={false}
      className={`text-center flex max-md:text-sm transition-all ${containerStyles}`}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyles} max-md:text-sm`}>{title}</span>
      {rightIcon && (
        <div className="relative h-6 w-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
