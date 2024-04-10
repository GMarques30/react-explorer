interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="w-full bg-orange text-gray-800 py-3 border-0 px-4 mt-4 rounded-md font-medium disabled:opacity-50"
    >
      {children}
    </button>
  );
};
