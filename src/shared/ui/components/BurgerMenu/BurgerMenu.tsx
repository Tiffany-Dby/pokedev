import { BurgerMenuProps } from "@/shared/types/BurgerMenu";
import "./BurgerMenu.scss";

const BurgerMenu = ({ isOpen, onBurgerClick }: BurgerMenuProps) => {
  return (
    <div
      className={`burger${isOpen ? " burger--open" : ""}`}
      role="button"
      aria-label="Bouton menu-burger"
      onClick={onBurgerClick}
    >
      <span></span>
    </div>
  );
};

export default BurgerMenu;
