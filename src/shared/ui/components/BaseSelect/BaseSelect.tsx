import { BaseSelectProps } from "@/shared/types/BaseSelect";
import "./BaseSelect.scss";

const BaseSelect = ({
  id,
  label,
  options,
  value,
  onChange,
}: BaseSelectProps) => {
  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <div className="select__wrapper">
      <label className="select__label" htmlFor={id}>
        {label}
      </label>
      <select
        className="select"
        name={id}
        id={id}
        value={value || ""}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="" disabled>
          --- Selectionner ---
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BaseSelect;
