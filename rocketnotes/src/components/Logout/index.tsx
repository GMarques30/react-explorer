import { ReactNode } from "react";

interface LogoutProps {
  children: ReactNode;
}

export const Logout = ({ children }: LogoutProps) => {
  return <button className="border-none bg-none">{children}</button>;
};
