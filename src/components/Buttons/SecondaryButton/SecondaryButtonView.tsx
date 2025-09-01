import Button from "../BaseButton";

type SecondaryButtonProps = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function SeconaryButtonView({
  type = "button",
  disabled = false,
  children,
  onClick,
}: SecondaryButtonProps) {
  return (
    <Button
      extraClass="button--secondary"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default SeconaryButtonView;
