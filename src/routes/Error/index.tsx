import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="w-full h-screen bg-tertiary-700 px-45 py-24 text-white">
      <div className="flex flex-col justify-between items-center w-full h-full px-42">
        <h1 className="text-7xl font-bold text-center">
            Página não encontrada!
        </h1>
        <ul className="flex flex-col gap-10 max-w-220 bg-tertiary-600 px-10 py-6 text-2xl rounded-br-[20px] rounded-tl-[20px] border-2 border-white">
          <li>
            Parece que a página que você está tentando acessar não existe ou não
            foi encontrada.
          </li>
          <li>
            <ul>
              <li>Verifique se o endereço digitado está correto.</li>
              <li>Ou volte para a página inicial.</li>
            </ul>
          </li>
        </ul>
        <div>
          <Link to="/" title="Voltar para a página inicial">
            Ir para Home
          </Link>
        </div>
      </div>
    </section>
  );
}
