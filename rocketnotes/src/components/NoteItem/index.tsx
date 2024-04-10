import { FiPlus, FiX } from "react-icons/fi";

interface NoteItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isNew?: boolean;
  value?: string;
  onClick?: () => void;
}

export const NoteItem = ({
  isNew,
  onClick,
  value,
  ...props
}: NoteItemProps) => {
  return (
    <div
      className={`flex items-center text-gray-300 mb-2 rounded-lg pr-4 pl-4 ${
        isNew ? "bg-transparent border border-dashed" : "bg-900 border-none"
      }`}
    >
      <input
        className="w-full p-3 text-white bg-transparent border-none placeholder:text-gray-300"
        type="text"
        value={value}
        readOnly={!isNew}
        {...props}
      />
      <button
        className={`border-none bg-none ${isNew ? "text-orange" : "text-red"}`}
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </div>
  );
};
