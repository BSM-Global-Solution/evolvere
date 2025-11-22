import { IoIosArrowDropright } from "react-icons/io";
import ButtonFormVerde from "../../components/ButtonFormVerde";
import ContainerTransparente from "../../components/ContainerTransparente/indeex";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { solicitarRecuperacaoSenha } from "../../service/api-esqueci-senha";
import ApiErro from "../../components/ApiErro";
import ApiSucesso from "../../components/ApiSucesso";

const s = z.object({
  email: z.string().email("E-mail inválido, use: exemplo@email.com"),
});

export type EsqueciSenhaType = z.infer<typeof s>;

export default function EsqueciSenha() {
  const { register, handleSubmit, formState: { errors },} = useForm<EsqueciSenhaType>({
    resolver: zodResolver(s),
  });

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit = async (data: EsqueciSenhaType) => {
    setApiError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const resp = await solicitarRecuperacaoSenha({ email: data.email });

      const token = resp.token;
      if (!token) throw new Error("Token não recebido da API.");

      // monta o link
      const resetLink = `${window.location.origin}/redefinirSenha?email=${encodeURIComponent(
        data.email
      )}&token=${encodeURIComponent(token)}`;

      await emailjs.send(
        "service_mb08tvc",
        "template_auuv4h9",
        {
          to_email: data.email,
          reset_link: resetLink,
        },
        "Y-XvMZ-iJNEK7VqLR"
      );

      setSuccess("Enviamos um e-mail com o link para redefinir sua senha.");
    } catch (err: any) {
      console.error(err);
      setApiError(err.message ?? "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center w-full min-h-screen bg-tertiary-700">
      <ContainerTransparente
        width={285}
        className="
            w-190 items-start
            max-[750px]:w-150
            max-[612px]:w-130
            max-[532px]:w-110
            max-[458px]:w-90
            max-[372px]:w-80
        "
      >
        <header className="flex flex-col items-center gap-5 text-center font-inter w-full">
          <span>
            <img
              src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1763793994/logo_evolvere_fundo_verde_nkva4h.png"
              alt="Logo do Evolvere com fundo verde"
            />
          </span>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl max-[458px]:text-3xl">
              Esqueceu sua senha?
            </h1>
            <p className="font-light text-xl max-[458px]:text-sm">
              Informe seu e-mail para <br /> redefinir sua senha.
            </p>
          </div>
        </header>

        {apiError && (
            <ApiErro message={apiError}/>
        )}
        {success && (
          <ApiSucesso message={success} />
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
                px-15 pt-7.5 w-full
                max-[532px]:px-0
            "
        >
          <div className="flex flex-col gap-2.5">
            <label className="font-bold text-2xl">E-mail *</label>
            <input
              type="text"
              placeholder="Digite o seu e-mail"
              className={`
                w-full outline-none 
                p-2.5 rounded-[10px]
                ${
                  errors["email"]
                    ? "border border-red-500"
                    : "border border-white"
                }
              `}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <ButtonFormVerde
            buttonText={loading ? "Enviando..." : "Enviar"}
            buttonTiltle="Enviar recuperação de senha"
            buttonIcon={!loading ? <IoIosArrowDropright size={25} /> : undefined}
            buttonPosition="center"
          />
        </form>
      </ContainerTransparente>
    </section>
  );
}