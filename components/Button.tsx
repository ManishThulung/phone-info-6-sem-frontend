import React from "react";

type Props = {
  type?: "primary" | "secondary" | "danger" | "text";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  type = "primary",
  onClick,
  children,
  className,
  disabled = false,
}) => {
  let bgColorClass;
  let textColorClass;
  switch (type) {
    case "secondary":
      bgColorClass = "bg-transparent border-2  border-[#0011FC] border-solid";
      textColorClass = "text-[#0011FC]";
      break;
    case "danger":
      bgColorClass = "bg-red-500 hover:bg-red-600 focus:ring-red-700";
      textColorClass = "text-white";
      break;
    case "text":
      bgColorClass = "bg-white-500 hover:bg-transparent-600 ";
      textColorClass = "text-black-200";
      break;
    default:
      bgColorClass = "bg-[#5964FF] hover:bg-blue-600";
      textColorClass = "text-white";
      break;
  }
  const baseClasses =
    "px-4 py-2 font-semibold font-inter rounded focus:outline-none transition";
  const classes = `${baseClasses} ${bgColorClass} ${textColorClass} ${
    className ?? ""
  }`;

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
