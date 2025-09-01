import BaseButton from "../BaseButton";

import "./primary-button-styles.scss";

type PrimaryButtonProps = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function PrimaryButtonView({
  type = "button",
  disabled = false,
  children,
  onClick,
}: PrimaryButtonProps) {
  return (
    <BaseButton
      extraClass="button--primary"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </BaseButton>
  );
}

export default PrimaryButtonView;
