interface ButtonTextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isactive?: boolean;
}

export const ButtonText = ({ title, isactive, ...props }: ButtonTextProps) => {
  return (
    <button
      {...props}
      className={`bg-none border-none text-md ${
        isactive ? "text-orange" : "text-gray-100"
      }`}
    >
      {title}
    </button>
  );
};
