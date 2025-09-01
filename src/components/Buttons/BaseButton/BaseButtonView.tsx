import "./base-button-styles.scss";

type BaseButtonViewProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  extraClass?: string;
};

function BaseButtonView({
  type = "button",
  extraClass = "",
  disabled = false,
  onClick,
  children,
}: BaseButtonViewProps) {
  const disabledClass = disabled ? "button--disabled" : "";
  const className = `button ${extraClass} ${disabledClass}`.trimEnd();

  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BaseButtonView;
