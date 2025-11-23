export default function CardAnotacoes() {
    return (
        <div className={`
            flex flex-col items-center bg-green-500 h-full
            px-5 pt-4 pb-5 rounded-[20px]
        `}>
            <h5 className="text-xl text-white">
                Minhas anotações 
            </h5>
            <div className="w-full flex justify-center items-center grow text-white">
                Não há anotações no momento
            </div>
        </div>
    )
}