import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

export const SignUp = () => {
  return (
    <div className="h-screen flex items-stretch">
      <div className="flex-1 bg-[url('../assets/background.png')] bg-no-repeat bg-center bg-cover"></div>
      <form className="flex flex-col justify-center items-center text-center px-[136px]">
        <h1 className="text-5xl text-orange">Rocket Notes</h1>
        <p className="text-sm text-gray-100">
          Aplicação para salvar e gerenciar seus links úteis
        </p>

        <h2 className="text-2xl my-12">Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button type="submit">Cadastrar</Button>

        <Link className="mt-[124px] text-orange" to="/">
          Voltar para o login
        </Link>
      </form>
    </div>
  );
};
