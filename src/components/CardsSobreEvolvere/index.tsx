interface CardsSobreEvolvereProps {
    icon: React.ReactNode
    title: string
    p: string
}

export default function CardsSobreEvolvere({icon, title, p}: CardsSobreEvolvereProps) {
  return (
    <div
      className="
        flex items-center w-full bg-green-300/35 rounded-[20px]
        border-4 border-green-500
        max-[490px]:flex-col
        "
    >
      <span className="py-8 pl-11 pr-19">
        <span className="
            text-[120px]
            max-[630px]:text-[80px]
            max-[534px]:text-[60px]
            max-[490px]:text-[80px]
        ">
            {icon}
        </span>
      </span>
      <div className="py-[33px] w-full pr-6 max-[490px]:pl-2">
        <h3
          className="
            text-3xl text-green-400 font-inter font-bold
            max-[630px]:text-2xl
            max-[534px]:text-xl
            max-[490px]:text-2xl
            max-[400px]:text-xl
            "
        >
          {title}
        </h3>
        <hr className="border-b-3 border-green-400 my-2.5" />
        <p
          className="
            font-medium font-inter text-2xl
            max-[630px]:text-lg
            max-[534px]:text-sm
            "
        >
          {p}
        </p>
      </div>
    </div>
  );
}
