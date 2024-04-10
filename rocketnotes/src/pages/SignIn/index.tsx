import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className="h-screen flex items-stretch">
      <form className="flex flex-col justify-center items-center text-center px-[136px]">
        <h1 className="text-5xl text-orange">Rocket Notes</h1>
        <p className="text-sm text-gray-100">
          Aplicação para salvar e gerenciar seus links úteis
        </p>

        <h2 className="text-2xl my-12">Faça seu login</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button type="submit">Entrar</Button>

        <Link className="mt-[124px] text-orange" to="/signup">
          Criar conta
        </Link>
      </form>
      <div className="flex-1 bg-[url('../assets/background.png')] bg-no-repeat bg-center bg-cover"></div>
    </div>
  );
};
