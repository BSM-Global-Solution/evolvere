import z from "zod";
import BannerLogoVerde from "../../../components/BannerLogoVerde";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiLogIn } from "react-icons/fi";
import FormVerde from "../../../components/FormVerde";
import LinkFormVerde from "../../../components/LinkFormVerde";
import ButtonFormVerde from "../../../components/ButtonFormVerde";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiErro from "../../../components/ApiErro";
import { loginUsuario } from "../../../service/api-entrar-conta";

const s = z.object({
  email: z.email("E-mail inválido"),
  senha: z.string().min(1, "Digite sua senha"),
});

export type Form = z.infer<typeof s>;

export default function EntrarConta() {
  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors },} = useForm<Form>({ 
    resolver: zodResolver(s),
  });

  const onSubmit = async (data: Form) => {
    setApiError(null);
    setLoading(true);

    try {
      const usuario = await loginUsuario({
        email: data.email,
        senha: data.senha,
      });

      navigate("/dashboardUsuario", {
        state: { usuario },
      });
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        setApiError(error.message);
      } else {
        setApiError("Erro inesperado ao realizar login.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        flex items-center min-h-screen w-full
        max-[776px]:flex-col
      "
    >
      {apiError && <ApiErro message={apiError} />}

      <FormVerde onSubmit={handleSubmit(onSubmit)} h2="Entrar na Conta" p={false}>
        <ul
          className="
            flex flex-col gap-8 pt-[57px] px-10 max-[884px]:gap-9
            max-[455px]:w-full 
          "
        >
          <li className="flex flex-col w-full gap-2.5 font-inter">
            <label
              className="
                text-2xl font-bold text-tertiary-700
                max-[1240px]:text-xl
                max-[980px]:text-lg
                max-[884px]:text-[16px]
              "
            >
              E-mail
            </label>

            <input
              type="text"
              placeholder="Digite o seu e-mail"
              className={`
                max-w-[610px] p-2.5 placeholder:text-tertiary-600
                outline-none rounded-[10px]
                ${
                  errors.email
                    ? "border border-red-500 focus:border-red-500"
                    : "border border-tertiary-600 focus:border-green-300"
                }
              `}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </li>

          <li className="flex flex-col w-full gap-2.5 font-inter">
            <label
              className="
                text-2xl font-bold text-tertiary-700
                max-[1240px]:text-xl
                max-[980px]:text-lg
                max-[884px]:text-[16px]
              "
            >
              Senha
            </label>

            <input
              type="password"
              placeholder="Digite sua senha"
              className={`
                max-w-[610px] p-2.5 placeholder:text-tertiary-600
                outline-none rounded-[10px]
                ${
                  errors.senha
                    ? "border border-red-500 focus:border-red-500"
                    : "border border-tertiary-600 focus:border-green-300"
                }
              `}
              {...register("senha")}
            />
            {errors.senha && (
              <span className="text-red-500">{errors.senha.message}</span>
            )}
          </li>
        </ul>

        <LinkFormVerde
          link="/criarConta"
          linkTitle="Criar Conta"
          linkPosition="start"
          linkText="Não tem uma conta? Clique aqui."
          pxDivLink={10}
        />

        <LinkFormVerde
          link="/esqueciSenha"
          linkTitle="Clique para trocar a senha"
          linkPosition="start"
          linkText="Esqueci minha senha."
          pxDivLink={10}
        />

        <ButtonFormVerde
          buttonText={loading ? "Entrando..." : "Entrar"}
          buttonTiltle="Entrar na conta"
          buttonIcon={!loading ? <FiLogIn className="w-[29px] h-6" /> : null}
          buttonPosition="start"
          pxButton={10}
          pxDivButton={10}
          className="
            max-[776px]:px-43
            max-[650px]:px-38
            max-[600px]:px-30
            max-[500px]:px-25   
          "
        />
      </FormVerde>

      <BannerLogoVerde
        title="Que bom ver você novamente!"
        p="Entre para continuar sua jornada."
      />
    </section>
  );
}