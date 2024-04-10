interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = ({ ...props }: TextAreaProps) => {
  return (
    <textarea
      className="w-full h-[150px] bg-900 text-white border-none resize-none rounded-lg px-7 py-3 placeholder:text-gray-300"
      {...props}
    />
  );
};
