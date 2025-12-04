import { useTheme } from "../../../context/ThemeContextBase";

export default function Contato() {

  const { theme } = useTheme();

  return (
    <section className={`
      ${
        theme == "light"
        ? ""
        : "bg-black-dark"
      }
      flex flex-col py-26 font-inter
    `}>
      <header className={`
        ${
          theme == "light"
          ? "text-green-500"
          : "text-tertiary-200"
        }
        text-center
        `}>
        <h1 className="text-2xl font-bold pb-1 md:text-4xl lg:text-5xl lg:py-4 xl:text-6xl xl:py-5 2xl:text-7xl 2xl:py-6">
          Contate-nos
        </h1>
        <p className="text-[16px] pb-5 md:text-2xl md:px-14 lg:text-3xl lg:px-26 lg:mb-1 xl:px-32 2xl:text-4xl 2xl:px-70">
          Precisa de ajuda, encontrou algum problema no site, ou ficou com alguma
          dúvida?
        </p>
      </header>

      <section className={`
        ${
          theme == "light"
          ? "bg-tertiary-100"
          : "bg-green-500"
        }
         border-y-3 border-x border-tertiary-300 py-10 px-[51px]
      `}>
        <div className="flex justify-center">
          <h2 className={`
            ${
              theme == "light"
              ? "text-green-500"
              : "text-tertiary-200"
            }
            text-3xl font-semibold
            `}>
            Envie uma mensagem para nós!
          </h2>
        </div>
        <div className="mt-[50px]">
          <form action="">
            <div className="flex gap-7.5">
              <div className="flex flex-col gap-2.5 w-90">
                <label 
                htmlFor="nome"
                className={`
                  ${
                    theme == "light"
                    ? "text-green-500"
                    : "text-tertiary-200"
                  }
                  font-bold text-2xl
                `}
                >
                  Nome *
                </label>
                <input 
                  type="text"
                  id="nome"
                  placeholder="Digite seu nome"
                  className={`
                    ${
                      theme == "light"
                      ? "placeholder:text-gray-300"
                      : "placeholder:text-gray-200 text-white"
                    }
                    p-2.5 rounded-[10px] outline-none border border-gray-300
                    `}
                />
              </div>
              <div className="flex flex-col gap-2.5 w-90">
                <label 
                htmlFor="email"
                className={`
                  ${
                    theme == "light"
                    ? "text-green-500"
                    : "text-tertiary-200"
                  }
                  font-bold text-2xl
                `}
                >
                  E-mail *
                </label>
                <input 
                  type="text"
                  id="email"
                  placeholder="exemplo@email.com"
                  className={`
                    ${
                      theme == "light"
                      ? "placeholder:text-gray-300"
                      : "placeholder:text-gray-200"
                    }
                    p-2.5 rounded-[10px] outline-none border border-gray-300
                    `}
                />
              </div>
            </div>
          </form>
          <div></div>
        </div>
      </section>
    </section>
  );
}
