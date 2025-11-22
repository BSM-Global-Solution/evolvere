import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section>
      <div>
        <h1>Página não encontrada!</h1>
        <ul>
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
