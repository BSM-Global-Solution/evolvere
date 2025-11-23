interface CardMentoresProps {
  foto: string;
  nome: string;
  cargo: string;
  descricao: string;
}

export function CardMentores({ foto, nome, cargo, descricao }: CardMentoresProps) {
  return (
    <div >
      <img src={foto} alt={nome} />
      <h3>{nome} - {cargo}</h3>
      <p>{descricao}</p>
      <button>Ver contato</button>
    </div>
  );
}
