import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white font-bold">
      <video
        src="/bg-home.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="inset-0 bg-black/40 absolute"></div>
    
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center">
            <h1 className="text-7xl font-instrument-sans">
            Evoluir é o primeiro passo <br />
            para transformar o futuro.
            </h1>

            <nav className="mt-50 mb-20">
            <ul className="flex gap-15">
                <li>
                    <Link 
                    to=""
                    title="Clique aqui para saber mais"
                    className="
                    py-2 px-4 bg-green-400 rounded-[20px]
                    border-3 border-green-500 text-2xl
                    "
                    >
                        Saber Mais!
                    </Link>
                </li>
                <li>
                    <Link 
                    to=""
                    title="Clique aqui para fazer login"
                    className="
                    py-2 px-4 bg-none rounded-[20px]
                    border-3 border-white text-2xl
                    "
                    >
                        Fazer login
                    </Link>
                </li>
                
            </ul>
            </nav>
        </div>
    </section>
  );
}