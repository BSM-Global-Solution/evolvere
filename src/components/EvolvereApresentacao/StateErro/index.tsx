import { useNavigate } from "react-router-dom";
import ContainerTransparente from "../ContainerTransparente/indeex";

export default function StateErro({ rota }: { rota: string }) {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center items-center w-full min-h-screen bg-tertiary-700">
      <ContainerTransparente width={185} className="gap-10 font-inter">
        <p className="text-center text-xl">
          Nenhum dado de registro encontrado. Volte para a tela de criação de
          conta.
        </p>
        <button
          onClick={() => navigate(rota)}
          className="
            bg-green-800 px-6 py-3 rounded-[20px]
            text-xl font-bold hover:btn-hover-green-800
          "
        >
          Voltar para Criar Conta
        </button>
      </ContainerTransparente>
    </section>
  );
}