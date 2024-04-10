import { IconType } from "react-icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
}

export const Input = ({ icon: Icon, ...props }: InputProps) => {
  return (
    <div className="w-full flex items-center bg-900 text-gray-300 mb-2 rounded-lg pl-4">
      {Icon && <Icon className="w-5 h-5" />}
      <input
        className="w-full p-3 text-white bg-transparent border-none placeholder:text-gray-300"
        {...props}
      />
    </div>
  );
};
