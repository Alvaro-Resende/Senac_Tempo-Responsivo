import Image from "next/image";

export default function Pesquisa() {
    return (
      <div className="flex justify-center items-center gap-5 sm:w-[1096px]">

        <div className="flex flex-col justify-center items-center">
            <Image src="/imagens/Senac_logo.png" alt="senac" width="96" height="70" />
            <h1 className="text-[#015593] font-semibold text-xl italic">Tempo</h1>
        </div>
        
        <input placeholder="🔎 Procurar Por Cidades" className="w-[240px] h-[60px] drop-shadow-lg sm:w-[1000px] bg-white rounded-[2vw] text-start p-5 text-black"></input>

      </div>
    );
}