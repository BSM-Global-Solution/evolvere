interface MentorCardProps {
  foto: string;
  nome: string;
  cargo: string;
  descricao: string;
}

export function MentorCard({ foto, nome, cargo, descricao }: MentorCardProps) {
  return (
    <div >
      <img src={foto} alt={nome} />
      <h3>{nome} - {cargo}</h3>
      <p>{descricao}</p>
      <button>Ver contato</button>
    </div>
  );
}
