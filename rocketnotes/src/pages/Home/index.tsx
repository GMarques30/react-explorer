import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { useState } from "react";
import { Link } from "react-router-dom";

export type TagsProps = {
  id: number;
  name: string;
};

export interface Notes {
  title: string;
  tags: TagsProps[];
}

export const Home = () => {
  const [notes] = useState<Notes[]>([
    {
      title: "React",
      tags: [
        { id: 1, name: "ReactJS" },
        { id: 2, name: "Typescript" },
      ],
    },
  ]);

  return (
    <div className="w-full h-screen grid grid-cols-[250px,auto] grid-rows-[105px,128px,auto,64px] bg-800">
      <div className="start-col-1 flex justify-center items-center border-b border-solid border-gray-700 bg-900">
        <h1 className="text-2xl text-orange">Rocket Notes</h1>
      </div>
      <Header className="col-start-2" />
      <ul className="row-start-2 row-end-4 bg-900 pt-16 flex flex-col gap-4 items-center ">
        <li>
          <ButtonText isactive title="Todos" />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Nodejs" />
        </li>
      </ul>
      <div className="col-start-2 row-start-2 px-16 my-16">
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </div>
      <div className="col-start-2 row-start-3 row-end-5 px-16 overflow-y-auto">
        <Section title="Minhas notas">
          {notes.map((note, index) => (
            <Note key={index} title={note.title} tags={note.tags} />
          ))}
        </Section>
      </div>
      <Link
        to="/new"
        className="row-start-4 flex justify-center items-center gap-2 px-4 py-2 bg-orange border-none"
      >
        <FiPlus />
        Criar nota
      </Link>
    </div>
  );
};
