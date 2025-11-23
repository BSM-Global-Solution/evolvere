import { useState } from "react";
import IntegranteInicioCard from "../../components/CardIntegrantesInicio";
import { cardIntegrantes } from "../../data/integrantesInicioData";
import { cardsFinal } from "../../data/integrantesFinalData";
import IntegranteFinalCard from "../../components/CardIntegrantesFinal";

export default function Integrantes() {
  
  const [cardAtivo, setCardAtivo] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setCardAtivo(cardAtivo === index ? null : index);
  };

  const cortarNome = (nome: string) => {
    const partes = nome.split(" ");
    return partes.slice(0, 2).join(" ");
  };

  return (
    <>
      <section className="bg-tertiary-100 pt-30 px-5 border-b-2 border-green-400
      lg:pt-40">
        <div className="flex items-center gap-4 mb-3">
          <h1 className="text-3xl font-bold text-green-600
          sm:text-4xl
          xl:text-5xl">
            Conheça nossa equipe!
          </h1>
          <hr className="hidden border-green-600 border-2 rounded
          sm:block sm:w-[32%]
          md:w-[44%]
          lg:w-[59%]" />
        </div>

        <p className="text-green-600 font-medium text-xl mb-5
        lg:text-2xl">
          Conheça os desenvolvedores por trás do projeto Evolvere:
        </p>

        <div className="flex flex-col gap-10 justify-center items-center md:flex-row">
          {cardIntegrantes.map((pessoa, index) => (
          <IntegranteInicioCard
            key={index}
            pessoa={pessoa}
            ativo={cardAtivo === index}
            onToggle={() => toggleCard(index)}
            cortarNome={cortarNome}
          />
        ))}
      </div>

        <h3 className="text-3xl font-bold text-green-500 mt-10 mb-5
        sm:text-4xl">
          Porquê criamos o Projeto Evolvere?
        </h3>
        <p className="text-lg text-green-500 font-medium mb-5
        sm:text-xl
        xl:text-2xl">
          O <strong>Evolvere</strong> nasceu como resposta ao desafio da
          <strong> FIAP (Faculdade de Informática e Administração Paulista)</strong>.
          Nosso objetivo é ajudar pessoas a encontrarem caminhos profissionais mais conscientes,
          tecnológicos e humanos ao mesmo tempo sempre olhando para a empregabilidade do futuro.
        </p>
      </section>

      <section className=" flex flex-col gap-10 py-10 px-5">
        <div className="flex flex-col gap-5 items-center
        sm:flex-row sm:justify-center
        xl:gap-10">
          <h2 className="text-green-500 font-bold text-4xl text-center
          sm:text-end sm:text-3xl
          md:text-4xl
          xl:text-6xl">
            Sobre o desafio - <br />
            Global Solution <br />
            2025
          </h2>
          <img
            src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1763302241/banner-global-solution_rdl0bo.png"
            alt="Banner do Global Solution 2025."
            className="sm:w-[55%]
            lg:w-[40%]"
          />
        </div>

        <p className="text-green-600 text-2xl
        xl:text-3xl">
          O <strong>Global Solution</strong>, é um grande desafio que integra
          diversas áreas do conhecimento e incentiva os alunos a resolverem
          problemas reais usando tecnologia e impacto social.
        </p>

        <div className="border-4 self-center border-green-400 rounded-[50px] shadow-[5px_7px_8px_rgba(0,0,0,.5)] p-5 w-[90%]
        lg:p-8
        ">
          <div className="flex items-center gap-4 mb-3">
            <h3 className="text-3xl font-bold text-green-400
            xl:text-4xl">O desafio</h3>
            <hr className="w-[25%] border-green-400 border-2 rounded
            sm:w-[70%]
            md:w-[75%]
            lg:w-[80%]" />
          </div>

          <p className="text-green-600 text-xl
          xl:text-2xl">
            Imaginar como será o trabalho em um mundo onde a <strong>tecnologia </strong>
            está em todos os lugares, mas as <strong>relações humanas</strong> continuam no centro de tudo.
            O desafio é propor uma solução que use <strong>inovação, tecnologia e boas ideias </strong>
            para melhorar a vida das pessoas, preparar organizações para novos tempos e criar oportunidades
            mais justas, inclusivas e sustentáveis.
          </p>
        </div>
      </section>

      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold text-green-600 mb-3
        sm:text-4xl
        xl:text-5xl">
          O time do Evolvere:
        </h2>
        <p className="text-green-600 mb-8 text-xl
        sm:text-2xl
        xl:text-3xl">
          Entenda como cada integrante contribuiu para a construção do Evolvere.
        </p>

        <div className="flex flex-col gap-10 justify-center items-center md:flex-row">
          {cardsFinal.map((pessoa, index) => (
          <IntegranteFinalCard key={index} pessoa={pessoa} />
        ))}
      </div>
      </section>
    </>
  );
}
