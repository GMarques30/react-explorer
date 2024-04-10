import { TagsProps } from "../../pages/Home";
import { Tag } from "../Tag";

interface NoteProps {
  title: string;
  tags: TagsProps[];
}

export const Note = ({ title, tags }: NoteProps) => {
  return (
    <button className="w-full bg-700 border-none rounded-lg p-6 mb-4">
      <h1 className="flex-1 text-left font-bold text-2xl text-white">
        {title}
      </h1>
      <footer className="w-full flex  mt-6">
        {tags && tags.map((tag) => <Tag key={tag.id} title={tag.name} />)}
      </footer>
    </button>
  );
};
