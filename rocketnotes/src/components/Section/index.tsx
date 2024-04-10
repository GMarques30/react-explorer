import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="my-6 mx-0 ">
      <h2 className="border-b border-solid border-gray-700 pb-4 mb-4 text-gray-100 text-xl font-normal">
        {title}
      </h2>
      {children}
    </div>
  );
};
