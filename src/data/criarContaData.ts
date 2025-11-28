import type { Form } from "../routes/EvolvereApresentacao/CriarConta";

export type CriarContaField = {
  name: keyof Form;
  label: string;
  type: string;
  placeholder?: string;
  wrapperClasses: string;
};

export const criarContaData: CriarContaField[] = [
  {
    name: "nome",
    label: "Nome *",
    type: "text",
    placeholder: "Digite o seu nome",
    wrapperClasses:
      "flex flex-col gap-2.5 w-1/2 font-inter max-[455px]:w-full",
  },
  {
    name: "data",
    label: "Data de nascimento *",
    type: "date",
    wrapperClasses:
      "flex flex-col gap-2.5 w-1/2 font-inter max-[455px]:w-full",
  },
  {
    name: "email",
    label: "E-mail *",
    type: "text",
    placeholder: "exemplo@email.com",
    wrapperClasses: "flex flex-col w-full gap-2.5 font-inter",
  },
  {
    name: "senha",
    label: "Crie uma senha *",
    type: "password",
    placeholder: "Crie sua senha",
    wrapperClasses: "flex flex-col w-full gap-2.5 font-inter",
  },
  {
    name: "confirmarSenha",
    label: "Confirme sua senha *",
    type: "password",
    placeholder: "Repita a senha",
    wrapperClasses: "flex flex-col w-full gap-2.5 font-inter",
  },
];