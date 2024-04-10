import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="w-full">
      <header className="flex items-center w-full py-16 px-16 bg-900">
        <Link to="/">
          <FiArrowLeft className="text-gray-100 text-2xl" />
        </Link>
      </header>
      <form className="max-w-[340px] mt-[-98px] mx-auto mb-0">
        <div className="relative mx-auto mb-8 w-[186px] h-[186px]">
          <img
            className="rounded-full w-[186px] h-[186px]"
            src="https://github.com/GMarques30.png"
            alt="Foto do usuário"
          />
          <label
            className="flex items-center justify-center absolute bottom-[7px] right-[7px] cursor-pointer w-12 h-12 bg-orange rounded-full"
            htmlFor="avatar"
          >
            <FiCamera className="w-6 h-6 text-gray-800" />
            <input className="hidden" id="avatar" type="file" />
          </label>
        </div>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button type="submit">Salvar</Button>
      </form>
    </div>
  );
};
