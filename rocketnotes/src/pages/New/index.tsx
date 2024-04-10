import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";

export const New = () => {
  return (
    <div className="w-full h-screen grid grid-rows-[105px,auto]">
      <Header />
      <main className="overflow-y-auto">
        <form className="max-w-[550px] my-[38px] mx-auto">
          <header className="flex items-center justify-between mb-[36px]">
            <h1 className="text-2xl">Criar nota</h1>
            <Link className="text-gray-100" to="/">
              voltar
            </Link>
          </header>

          <Input placeholder="Título" />
          <TextArea placeholder="Observações" />
          <Section title="Link úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="https://example.com.br" />
          </Section>
          <Section title="Marcadores">
            <div className="flex justify-between flex-wrap">
              <NoteItem value="React" />
              <NoteItem value="React" />
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>
          <Button>Salvar</Button>
        </form>
      </main>
    </div>
  );
};
