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
  const className = `button ${extraClass}`.trimEnd();

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
