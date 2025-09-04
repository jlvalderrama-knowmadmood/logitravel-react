import Button from "../BaseButton";

import "./secondary-button-styles.scss";

type SecondaryButtonProps = {
  type?: "button" | "submit" | "reset";
  extraClass?: string;
  disabled?: boolean;
  ariaLabel?: string;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function SeconaryButtonView({
  type = "button",
  disabled = false,
  extraClass = "",
  ariaLabel,
  children,
  onClick,
}: SecondaryButtonProps) {
  const className = `button--secondary ${extraClass}`.trimEnd();

  return (
    <Button
      extraClass={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
      ariaLabel={ariaLabel}
    >
      {children}
    </Button>
  );
}

export default SeconaryButtonView;
