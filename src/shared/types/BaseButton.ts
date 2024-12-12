export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  btnValue: React.ReactNode;
  btnClick?: () => void;
};
