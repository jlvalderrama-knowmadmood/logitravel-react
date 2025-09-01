import Button from "../BaseButton";

import "./secondary-button-styles.scss";

type SecondaryButtonProps = {
  type?: "button" | "submit" | "reset";
  extraClass?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function SeconaryButtonView({
  type = "button",
  disabled = false,
  extraClass = "",
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
    >
      {children}
    </Button>
  );
}

export default SeconaryButtonView;
