import { Link } from "react-router-dom";
import { Logout } from "../Logout";
import { RiShutDownLine } from "react-icons/ri";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <div
      className={`flex justify-between px-20 w-full border-b border-solid border-gray-700 ${className}`}
    >
      <Link to="/profile" className="flex items-center">
        <img
          className="w-14 h-14 rounded-full"
          src="https://github.com/GMarques30.png"
          alt="User photo"
        />
        <div className="flex flex-col m-4">
          <span className="text-sm text-gray-100">Bem-vindo,</span>
          <strong className="text-lg text-white">Giovanni Marques</strong>
        </div>
      </Link>
      <Logout>
        <RiShutDownLine className="text-gray-100 text-3xl" />
      </Logout>
    </div>
  );
};
