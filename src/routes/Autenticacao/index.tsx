import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoIosArrowDropright } from "react-icons/io";
import ContainerTransparente from "../../components/ContainerTransparente/indeex";
import ApiErro from "../../components/ApiErro";
import emailjs from "@emailjs/browser";
import { confirmarCodigo, reenviarCodigo, } from "../../service/api-auth";
import StateErro from "../../components/StateErro";

interface LocationState {
  nome: string;
  email: string;
  senha: string;
  dataNascimento: string;
}

export default function Autenticacao() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as LocationState | null;

  const [codigo, setCodigo] = useState("");
  const [apiError, setApiError] = useState<string | null>(null);
  const [loadingEnviar, setLoadingEnviar] = useState(false);
  const [loadingReenviar, setLoadingReenviar] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);

  // Se alguém acessar /autenticacao direto sem passar pelo fluxo de registro
  if (!state) return (<StateErro rota="/criarConta"/>) 
  
  const { nome, email, senha, dataNascimento } = state;

  const handleEnviar = async (event: React.FormEvent) => {
    event.preventDefault();
    setApiError(null);
    setMensagemSucesso(null);
    setLoadingEnviar(true);

    try {
      if (!codigo || codigo.trim().length === 0) {
        setApiError("Digite o código recebido por e-mail.");
        setLoadingEnviar(false);
        return;
      }

      // Confirma o código no backend (já cria o usuário se estiver tudo certo)
      const usuarioCriado = await confirmarCodigo({
        nome,
        email,
        senha,
        dataNascimento,
        codigo,
      });

    // Envia email avisando que a conta foi criada com sucesso
    await emailjs.send(
    "service_eld94ci",
    "template_ocvszt2",
    {
        nome: nome,
        email: email,
    },
    "4PFdoXgps6b5cCssP"
    );

      setMensagemSucesso("Conta criada com sucesso! Redirecionando...");

      // Redireciona para a página do usuário
      setTimeout(() => {
        navigate("/dashboardUsuario", { state: { usuario: usuarioCriado } });
      }, 1500);
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof Error) {
        setApiError(error.message);
      } else {
        setApiError("Erro ao confirmar o código.");
      }
    } finally {
      setLoadingEnviar(false);
    }
  };

  const handleReenviarCodigo = async () => {
    setApiError(null);
    setMensagemSucesso(null);
    setLoadingReenviar(true);

    try {
      // Chama o backend para gerar um novo código
      const resp = await reenviarCodigo(email);
      const novoCodigo = resp.codigo;

      // Envia o novo código por email
      await emailjs.send(
        "service_eld94ci",
        "template_oz34zki",
        {
          to_email: email,
          to_name: nome,
          codigo: novoCodigo,
        },
        "4PFdoXgps6b5cCssP"
      );

      setMensagemSucesso("Novo código enviado para o seu e-mail.");
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof Error) {
        setApiError(error.message);
      } else {
        setApiError("Erro ao reenviar o código.");
      }
    } finally {
      setLoadingReenviar(false);
    }
  };

  return (
    <section className="flex justify-center items-center w-full min-h-screen bg-tertiary-700">
      {apiError && <ApiErro message={apiError} />}
      <ContainerTransparente
        width={185}
        className="
          gap-15 font-inter
          max-[750px]:w-150
          max-[612px]:w-130
          max-[532px]:w-110
        "
      >
        <header className="flex flex-col gap-5 items-center">
          <h1
            className="
              text-4xl font-bold
              max-[550px]:text-3xl
              max-[420px]:text-2xl
            "
          >
            Autenticação necessária
          </h1>
          <p
            className="
              text-center text-xl
              max-[550px]:text-md
              max-[420px]:text-sm
            "
          >
            Enviamos um código de verificação para o e-mail{" "}
            <span className="font-bold">{email}</span>. <br />
            Insira o código abaixo para continuar.{" "}
            <span className="font-bold">(O código expira em 15 minutos.)</span>
          </p>
          {mensagemSucesso && (
            <p className="text-green-300 font-semibold">{mensagemSucesso}</p>
          )}
        </header>

        <form className="flex flex-col gap-10 w-full" onSubmit={handleEnviar}>
          <div
            className="
              flex flex-col w-full px-30
              max-[612px]:px-20
              max-[550px]:px-10
            "
          >
            <label
              className="
                text-2xl font-bold
                max-[420px]:text-xl
              "
            >
              Código
            </label>
            <input
              type="number"
              placeholder="Digite o seu código aqui"
              className="w-full border border-white p-3.5 rounded-[10px] outline-none"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>

          <div
            className="
              flex flex-col gap-2 text-md
              max-[550px]:text-sm
            "
          >
            <p>
              Não recebeu o código? Verifique sua caixa de
              <span className="font-bold"> spam </span>
              ou
              <span className="font-bold"> lixeira.</span>
            </p>
            <p>
              Ainda não chegou? Clique em
              <span className="font-bold"> Reenviar código.</span>
            </p>
          </div>

          <ul
            className="
              px-30 flex justify-between font-bold
              max-[750px]:px-10
              max-[612px]:px-5
              max-[550px]:px-0
              max-[461px]:flex-col
              max-[461px]:w-full
              max-[461px]:gap-5
            "
          >
            <li>
              <button
                type="button"
                onClick={handleReenviarCodigo}
                disabled={loadingReenviar}
                title="Clique aqui para reenviar o código"
                className={`
                  flex gap-2 items-center
                  bg-green-800 p-4 rounded-[20px]
                  text-xl hover:btn-hover-green-800
                  cursor-pointer 
                  max-[461px]:text-sm
                  max-[461px]:w-full
                  max-[461px]:justify-center
                  disabled:opacity-60 disabled:cursor-not-allowed
                `}
              >
                {loadingReenviar ? "Reenviando..." : "Reenviar código"}
                <span>
                  <HiOutlineRefresh size={30} />
                </span>
              </button>
            </li>
            <li>
              <button
                type="submit"
                disabled={loadingEnviar}
                title="Clique aqui para enviar o código"
                className={`
                  flex gap-2 items-center
                  bg-green-800 p-4 rounded-[20px]
                  text-xl hover:btn-hover-green-800
                  cursor-pointer
                  max-[461px]:text-sm
                  max-[461px]:w-full
                  max-[461px]:justify-center
                  disabled:opacity-60 disabled:cursor-not-allowed
                `}
              >
                {loadingEnviar ? "Validando..." : "Enviar"}
                <span>
                  <IoIosArrowDropright size={30} />
                </span>
              </button>
            </li>
          </ul>
        </form>
      </ContainerTransparente>
    </section>
  );
}