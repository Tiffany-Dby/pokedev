import { BaseInputProps } from "@/shared/types/BaseInput";
import "./BaseInput.scss";

const BaseInput = ({
  id,
  label,
  type = "text",
  ariaLabel,
  list,
  placeholder,
}: BaseInputProps) => {
  return (
    <div className="input__wrapper">
      {label && (
        <label className="input__label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className="input"
        type={type}
        name={id}
        id={id}
        list={list}
        aria-label={ariaLabel}
        placeholder={placeholder}
      />
    </div>
  );
};

export default BaseInput;
