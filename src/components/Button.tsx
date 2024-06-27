import { Link } from "react-router-dom";
import { buttonProps } from "../types/types";

const Button = ({ navigate, text }: buttonProps) => {
  return (
    <Link to={navigate}>
      <div className="flexCenter w-[151px] h-[48px] bg-button_purple rounded-[4px] text-white text-[16px] font-medium">
        {text}
      </div>
    </Link>
  );
};

export default Button;
