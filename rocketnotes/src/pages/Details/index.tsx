import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export const Details = () => {
  return (
    <div className="grid w-full h-screen grid-rows-[105px,auto]">
      <Header />

      <main className="overflow-y-scroll py-16">
        <div className="flex flex-col my-0 mx-auto max-w-[550px] [&>*:first-child]:self-end">
          <ButtonText className="" title="Excluir nota" />

          <h1 className="text-4xl font-medium my-6">Introdução ao React</h1>

          <p className="text-md mt-6 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            facilis necessitatibus adipisci tempore debitis amet! Dolores, id
            veniam eius sunt architecto nisi aut? Aliquid alias odit magni
            explicabo. Voluptas, reiciendis!
          </p>

          <Section title="Links úteis">
            <ul className="list-none">
              <li className="mt-3">
                <a className="text-white" href="#">
                  https://rocketseat.com.br/
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white" href="#">
                  https://rocketseat.com.br/
                </a>
              </li>
            </ul>
          </Section>
          <Section title="Marcadores">
            <Tag title="React" />
            <Tag title="Typescript" />
            <Tag title="NodeJS" />
            <Tag title="Express" />
          </Section>
          <Button>Voltar</Button>
        </div>
      </main>
    </div>
  );
};
