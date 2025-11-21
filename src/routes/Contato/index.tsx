import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import { FaYoutube } from 'react-icons/fa';
import { IoIosArrowDropright } from 'react-icons/io';
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Contato() {

    interface CardsGerais {
        icon: React.ReactNode;
        link: string;
        title: string;
        figcaption: string;
        span: string;
        text: string;
        text1: string;
        text2: string;
    }

    const cardsEvolvere: CardsGerais[] = [
        { icon: <FiPhone size={24} />, link: "", title: "", figcaption: "Telefone:", span: "", text: "(12) 3456-7891", text1: "", text2: ""},
        { icon: <MdOutlineMail size={24} />, link: "", title: "", figcaption: "E-mail:", span: "evolvere.contatos@gmail.com", text: "", text1: "", text2: "" },
        { icon: <FaRegClock size={24} />,link: "", title: "", figcaption: "Horários de Atendimento", span: "", text: "Segunda à Sexta: das 07h às 20h", text1: "Sábados: das 09h às 19h", text2: "Domingos e feriados: fechado"  }
    ];

    interface RedeSocial {
        icon: React.ReactNode;
        link: string;
        title: string;
    }

    const redesSociais: RedeSocial[] = [
        { icon: <RiTwitterXFill size={20} />, link: "", title: "Clique para visualizar o X (twitter) do Evolvere" },
        { icon: <GrInstagram size={20} />, link: "", title: "Clique para visualizar o instagram do Evolvere" },
        { icon: <FaYoutube size={20} />, link: "", title: "Clique para visualizar o youtube do Evolvere" }
    ];

    return (
        <section className="flex flex-col text-center py-26 px-10">
            <h1 className="text-2xl text-[var(--color-green-500)] font-bold pb-1 md:text-4xl lg:text-5xl lg:py-4">
                Contate-nos
            </h1>
            <p className="text-[16px] text-[var(--color-green-500)] pb-5 md:text-2xl md:px-14 lg:text-3xl lg:px-26 lg:mb-1">
                Precisa de ajuda, encontrou algum problema no site, ou ficou com alguma dúvida?
            </p>
                <div className="bg-[var(--color-tertiary-100)] border-1 rounded-[20px] border-[var(--color-cyan-300)] flex flex-col md:flex-row">
                    <div className="px-2 flex flex-col md:items-start md:w-[57.5%] md:pl-6 lg:w-[65%]">
                        <h2 className="text-[var(--color-green-500)] font-semibold text-[16px] py-1 md:py-2 md:text-2xl lg:text-3xl">
                            Envie uma mensagem para nós!
                        </h2>
                        <label className="text-[16px] text-[var(--color-green-500)] font-bold flex py-2 px-1 md:text-2xl lg:text-3xl">
                            Nome *
                        </label>
                        <input type="text"
                        placeholder="Digite seu nome"
                        className="border-2 border-[var(--color-gray-200)] rounded-[10px] text-[14px] text-[var(--color-gray-300)] font-medium p-[6px] px-2 md:text-[16px] md:w-[80%]"
                        />
                        <label className="text-[16px] text-[var(--color-green-500)] font-bold flex py-2 px-1 md:text-2xl lg:text-3xl">
                            Email *
                        </label>
                        <input type="text"
                        placeholder="Digite seu email"
                        className="border-2 border-[var(--color-gray-200)] rounded-[10px] text-[14px] text-[var(--color-gray-300)] font-medium p-[6px] px-2 md:text-[16px] md:w-[80%]"
                        />
                        <label className="text-[16px] text-[var(--color-green-500)] font-bold flex py-2 px-1 md:text-2xl lg:text-3xl">
                            Assunto *
                        </label>
                        <input type="text"
                        placeholder="Digite o assunto da mensagem"
                        className="border-2 border-[var(--color-gray-200)] rounded-[10px] text-[14px] text-[var(--color-gray-300)] font-medium p-[6px] px-2 md:text-[16px] md:w-[80%]"
                        />
                        <label className="text-[16px] text-[var(--color-green-500)] font-bold flex py-2 px-1 md:text-2xl lg:text-3xl">
                            Sua mensagem *
                        </label>
                        <textarea
                        placeholder="Digite sua mensagem"
                        className="border-2 border-[var(--color-gray-200)] rounded-[10px] text-[14px] text-[var(--color-gray-300)] font-medium p-[6px] px-2 md:text-[16px] md:w-[80%]"
                        />
                        <div className="flex justify-center py-3">
                        <button 
                        type="submit"
                        title="Clique aqui para enviar mensagem"
                        className="w-[75%] border-1 border-[var(--color-green-400)] bg-[var(--color-green-400)] rounded-[15px] text-[18px] text-white flex justify-center gap-3 p-1.5 hover:bg-[var(--color-green-300)] hover:duration-300
                        sm:w-[40%] md:items-center md:w-full"
                        >
                        Enviar mensagem <IoIosArrowDropright size={24} />
                        </button>
                    </div>
                    </div>
                    <div className="bg-[var(--color-green-400)] rounded-[20px] flex flex-col items-center py-1
                    sm:items-start md:mt-10 md:mb-3 lg:w-[40%] lg:mr-7 lg:mb-7">
                        <h3 className='text-white text-2xl font-semibold flex px-4'>
                            Contato
                        </h3>
                        <ul className="flex flex-col gap-2">
                            {cardsEvolvere.map((cardsEvolvere, index) => (
                                <li className="flex" key={index}>
                                <Link 
                                    to={cardsEvolvere.link}
                                    className="w-full"
                                    title={cardsEvolvere.title}
                                >
                                    <figure className="flex items-center gap-3 px-3 py-2">
                                    <div className="bg-[var(--color-green-500)] rounded-[10px] p-3 text-white">
                                        {cardsEvolvere.icon}
                                    </div>
                                    <div className="flex flex-col gap-1 font-bold">
                                        <figcaption className="text-[14px] text-white">{cardsEvolvere.figcaption}</figcaption>
                                        <p className="text-white text-[12px]">
                                        <span className="underline text-[12px]">{cardsEvolvere.span}</span> <text className='flex text-start'>{cardsEvolvere.text} <br /> {cardsEvolvere.text1} <br /> {cardsEvolvere.text2}</text>
                                        </p>
                                    </div>
                                    </figure>
                                </Link>
                                </li>
                            ))}
                        </ul>
                        <h4 className='text-white text-2xl font-semibold flex px-4'>
                            Siga-nos
                        </h4>
                        <ul className="flex">
                            {redesSociais.map((rede, index) => (
                                <li className="flex" key={index}>
                                <Link 
                                    to={rede.link}
                                    className="w-full flex items-center gap-3 px-3 py-2"
                                    title={rede.title}
                                >
                                    <div className="bg-[var(--color-green-500)] rounded-[10px] p-3 text-white">
                                    {rede.icon}
                                    </div>
                                </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <section className='flex flex-col items-center text-center p-4'>
                    <h1 className='text-[var(--color-green-500)] font-bold text-xl'>
                        O que você achou do nosso projeto?
                    </h1>
                    <p className='text-[var(--color-green-500)] text-[16px] pb-5'>
                        Sua opinião é essencial para melhorarmos cada vez mais. <br />
                        Conte pra gente como tem sido sua experiência com a Evolvere!
                    </p>
                    <div>
                        
                    </div>        
                    <h2 className='text-[var(--color-green-500)] font-bold text-xl pb-3'>
                        Gostaria de deixar um comentário? <br />
                        <span className='font-normal text-[16px]'>(Caso não queira, deixe este espaço em branco).</span>
                    </h2>
                    <textarea 
                    name="Mensagem" 
                    id="Mensagem" 
                    placeholder="Digite sua mensagem"
                    className='w-full border-1 border-[var(--color-gray-200)] rounded-[10px] p-2 gap-1 text-[14px]'></textarea>
                    <div className='py-3'>
                    <button 
                    type="submit"
                    title="Clique aqui para enviar o feedback"
                    className="w-full border-1 border-[var(--color-green-400)] bg-[var(--color-green-400)] rounded-[15px] text-[18px] text-white flex gap-3 p-1.5 hover:bg-[var(--color-green-300)] hover:duration-300"
                    >
                    Enviar feedback <IoIosArrowDropright size={24} />
                    </button>
                    </div>
                </section>
        </section>
    )
}