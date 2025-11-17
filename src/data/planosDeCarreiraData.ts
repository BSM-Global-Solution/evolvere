interface PlanoDeCarreiraProps {
    categoria: string;
    planos: {
        img: string;
        alt: string;
        title: string;
        description: string;
    }[];
}

export const planosDeCarreiraData: PlanoDeCarreiraProps[] = [
    {
        categoria: "Tecnologia e IA",
        planos: [
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763375395/img_engenheiro_ia_acm68h.png",
                alt: "Uma imagem representando um Engenheiro de IA / Machine Learning",
                title: "Engenheiro de IA / Machine Learning",
                description: "Desenvolva habilidades em programação, estatística e aprendizado de máquina para atuar em projetos que usam IA no dia a dia."
            },
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763375477/img_engenheiro_software_rvwnsp.png",
                alt: "Uma imagem representando um Engenheiro de Software",
                title: "Engenheiro de Software",
                description: "Construa uma base sólida em programação e desenvolvimento de aplicações modernas, do front ao back-end."
            },
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763375664/img_cientista_dados_pvresv.png",
                alt: "Uma imagem representando um Cientista de Dados",
                title: "Cientista de Dados",
                description: "Combine análise estatística, programação e storytelling com dados para gerar insights valiosos."
            }
        ]
    },
    {
        categoria: "Negócios e Estratégia de Dados",
        planos: [
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763376009/img_analista_bi_byllny.png",
                alt: "Uma imagem representando um Analista de Inteligência de Negócios (BI)",
                title: "Analista de Inteligência de Negócios (BI)",
                description: "Aprenda a transformar dados em decisões estratégicas por meio de dashboards, relatórios e análises de negócio."
            },
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763376178/img_gerente_produto_obcwxx.png",
                alt: "Uma imagem representando um Gerente de Produto Digital (Product Manager)",
                title: "Gerente de Produto Digital (Product Manager)",
                description: "Entenda o ciclo de vida de produtos digitais e aprenda a liderar times e estratégias centradas no usuário."
            },
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763376288/img_consultor_digital_sgsbjf.png",
                alt: "Uama imagem representando um Consultor de Transformação Digital",
                title: "Consultor de Transformação Digital",
                description: "Conduza empresas em sua jornada digital, modernizando processos, sistemas e modelos de negócio."
            }
        ]
    },
    {
        categoria: "Educação, Treinamento e Requalificação",
        planos: [
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763376739/img_instrutor_online_pa2ew5.png",
                alt: "Uma imagem representando um Instrutor Online / Criador de Cursos Digitais",
                title: "Instrutor Online / Criador de Cursos Digitais",
                description: "Crie conteúdos educacionais de alto impacto e desenvolva cursos para plataformas digitais em um mercado em plena expansão."
            },
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763377078/especialista_ia_wh1zyc.png",
                alt: "Uma imagem representando um Especialista em Aprendizagem Baseada em IA",
                title: "Especialista em Aprendizagem Baseada em IA",
                description: "Atue no desenvolvimento de sistemas educacionais inteligentes que personalizam o ensino conforme o ritmo do aluno."
            },
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763377239/img_coaching_ey26zo.png",
                alt: "Uma imagem representando um Coach ou Mentor de Carreira",
                title: "Coach / Mentor de Carreira",
                description: "Ajude pessoas a alcançarem seus objetivos profissionais por meio de orientação estratégica e desenvolvimento pessoal."
            }
        ]
    },
    {
        categoria: "Saúde e Biotecnologia",
        planos: [
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763377495/img_telemedicina_scapcf.png",
                alt: "Uma imagem representando um Profissional de Telemedicina",
                title: "Profissional de Telemedicina",
                description: "Utilize tecnologias digitais para atender pacientes à distância, ampliando o acesso à saúde com praticidade e segurança."
            },
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763377584/img_bioengenheiro_t8ot4r.png",
                alt: "Uma imagem representando um Bioengenheiro ou Pesquisador em Biotecnologia",
                title: "Bioengenheiro / Pesquisador em Biotecnologia",
                description: "Pesquise soluções inovadoras em genética, fármacos e biotecnologia para melhorar tratamentos e diagnósticos médicos."
            },
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763377750/analista_clinico_yhxeax.png",
                alt: "Uma imagem representando um Analista de Dados Clínicos",
                title: "Analista de Dados Clínicos",
                description: "Analise dados médicos e hospitalares para melhorar processos, diagnósticos e resultados na área da saúde."
            }
        ]
    },
    {
        categoria: "Sustentabilidade e Meio Ambiente",
        planos: [
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763377978/img_gestor_esg_yyusb3.png",
                alt: "Uma imagem representando um Gestor de ESG ou Sustentabilidade",
                title: "Gestor ESG / Sustentabilidade",
                description: "Lidere iniciativas ambientais, sociais e de governança que tornam empresas mais responsáveis e alinhadas às novas regulações."
            },
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763378075/engenheiro_renovavel_alxwvg.png",
                alt: "Uma imagem representando um Engenheiro de Energias Renováveis",
                title: "Engenheiro de Energias Renováveis",
                description: "Desenvolva e gerencie soluções baseadas em energia limpa, como solar, eólica e hidrogênio verde."
            },
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763378231/economia_circular_mdj64b.png",
                alt: "Uma imagem representando um Consultor em Economia Circular",
                title: "Consultor em Economia Circular",
                description: "Implemente modelos sustentáveis que reutilizam materiais, reduzem desperdícios e ampliam o ciclo de vida dos produtos."
            }
        ]
    },
    {
        categoria: "Economia Criativa e Conteúdo",
        planos: [
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763378418/img_criador_conteudo_ljnv9a.png",
                alt: "Uma imagem representando um Criador de Conteúdo ou Influenciador Estratégico",
                title: "Criador de Conteúdo / Influenciador Estratégico",
                description: "Planeje e produza conteúdos autênticos capazes de engajar audiências e fortalecer marcas no ambiente digital."
            },
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763378576/designer_3d_ngupiq.png",
                alt: "Uma imagem representando um Designer 3D ou Modelador de Realidade Virtual",
                title: "Designer 3D / Modelador de Realidade Virtual",
                description: "Crie objetos, cenários e experiências imersivas para jogos, metaverso, publicidade e simulações."
            },
            {
                img: "https://res.cloudinary.com/dtbgsboo5/image/upload/v1763378690/roteirista_ru7hwy.png",
                alt: "Uma imagem representando um Roteirista de Experiências Interativas",
                title: "Roteirista de Experiências Interativas",
                description: "Desenvolva histórias envolventes para jogos, experiências digitais e sistemas de IA que interagem com o usuário."
            }
        ]
    },
]