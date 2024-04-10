interface TagProps {
  title: string;
}

export const Tag = ({ title, ...props }: TagProps) => {
  return (
    <span
      {...props}
      className="text-sm py-1 px-3 rounded mr-2 text-gray-900 font-medium bg-orange"
    >
      {title}
    </span>
  );
};
