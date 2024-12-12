import { ButtonProps } from "@/shared/types/BaseButton";
import "./BaseButton.scss";

const BaseButton = ({ type = "button", btnValue, btnClick }: ButtonProps) => {
  return (
    <div className="btn__container">
      <button className="btn" type={type} onClick={btnClick}>
        {btnValue}
      </button>
    </div>
  );
};

export default BaseButton;
