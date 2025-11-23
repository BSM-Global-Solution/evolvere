import { FaChartLine, FaRegHandshake } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";

export default function CardIASobre() {
  return (
    <article
      className="
          relative px-20 -mt-6 z-100
          max-[1200px]:px-10
          max-[1100px]:px-5
          max-lg:px-0
          "
    >
      <ul
        className="
              flex justify-between px-19 pt-7 pb-6 font-bold font-inter
              bg-green-400 w-full text-white rounded-[20px]
              shadow-[14px_14px_17px_rgba(0,0,0,.4)]
              border-b-8 border-t-2 border-x-3
              border-green-500
              max-[1200px]:px-10
              max-[750px]:px-5
              max-[660px]:flex-col
              max-[660px]:gap-5
              "
      >
        <li>
          <figure className="flex flex-col items-center justify-center">
            <RiRobot2Line
              className="
                      text-[110px] 
                      max-[1030px]:text-[80px] 
                      max-[855px]:text-[60px]
                      "
            />
            <figcaption className="text-2xl max-[1030px]:text-xl max-[855px]:text-[16px]">
              IA que impulsiona você
            </figcaption>
          </figure>
        </li>
        <li className="relative flex items-center">
          <span
            className="
                    absolute left-0 top-0 h-full w-1
                  bg-white max-[660px]:w-full max-[660px]:h-0.5 "
          ></span>
        </li>
        <li>
          <figure className="flex flex-col items-center justify-center">
            <FaRegHandshake
              className="
                      text-[110px] 
                      max-[1030px]:text-[80px] 
                      max-[855px]:text-[60px]
                      "
            />
            <figcaption className="text-2xl max-[1030px]:text-xl max-[855px]:text-[16px]">
              Crescemos juntos
            </figcaption>
          </figure>
        </li>
        <li className="relative flex items-center">
          <span
            className="
                    absolute left-0 top-0 h-full w-1
                  bg-white max-[660px]:w-full max-[660px]:h-0.5 "
          ></span>
        </li>
        <li>
          <figure className="flex flex-col items-center justify-center">
            <FaChartLine
              className="
                      text-[110px]
                      max-[1030px]:text-[80px] 
                      max-[855px]:text-[60px]
                      "
            />
            <figcaption className="text-2xl max-[1030px]:text-xl max-[855px]:text-[16px]">
              Cresça sem limites
            </figcaption>
          </figure>
        </li>
      </ul>
    </article>
  );
}