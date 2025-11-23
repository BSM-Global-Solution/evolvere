interface Props {
  pessoa: {
    img: string;
    nome: string;
    funcoes: string[];
  };
}

export default function IntegranteFinalCard({ pessoa }: Props) {
  return (
    <div className="flex flex-col items-center gap-5 py-5 bg-green-300/35 rounded-2xl border-4 border-green-500">
      <img
        src={pessoa.img}
        alt={pessoa.nome}
        className="w-[85%] border-4 rounded-[20px] border-green-500"
      />

      <h3 className="text-3xl text-green-600 font-bold md:text-2xl">
        {pessoa.nome}
      </h3>

      <ul>
        {pessoa.funcoes.map((funcao, i) => (
          <li
            key={i}
            className="list-disc text-green-400 font-medium text-xl sm:text-2xl md:text-xl lg:text-2xl">
            {funcao}
          </li>
        ))}
      </ul>
    </div>
  );
}
