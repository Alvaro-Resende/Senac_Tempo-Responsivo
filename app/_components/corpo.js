import Image from "next/image";
import { WiDayCloudyWindy } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiRainMix } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";

export default function Corpo() {
    return (
      <div className="flex flex-col justify-center items-center gap-5">

        <div className="flex">
            <div className="flex flex-col justify-start">
                <h1 className="text-[#2A374C] text-5xl font-bold">Lavras</h1>
                <h1 className="text-[#2A374C]">Chance de Chuva 0%</h1>
                <h1 className="text-[#2A374C] text-6xl font-bold mt-3">28°</h1>
            </div>

             <Image src="/imagens/Sol Lavras.png" alt="senac" width="180" height="70" />
        </div>

        <div className="w-[340px] h-[180px] bg-[#0380FE] rounded-[2vw] flex justify-center items-center space-x-6 sm:w-[700px]">

            <div className="flex flex-col justify-center items-center space-y-3">
                <span>6:00 AM</span>
                <WiDayCloudyWindy className="text-6xl text-gray-500"/>
                <span className="font-bold text-xl">24°</span>
            </div>

            <div className="flex flex-col justify-center items-center space-y-3">
                <span>9:00 AM</span>
                <WiDaySunny className="text-6xl text-yellow-500"/>
                <span className="font-bold text-xl">28°</span>
            </div>

            <div className="flex flex-col justify-center items-center space-y-3">
                <span>12:00 AM</span>
                <WiCloud className="text-6xl text-gray-700"/>
                <span className="font-bold text-xl">30°</span>
            </div>

            <div className="flex flex-col justify-center items-center space-y-3">
                <span>3:00 AM</span>
                <WiRainMix className="text-6xl text-gray-900 "/>
                <span className="font-bold text-xl">32°</span>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5">

            <div className="flex justify-center items-center space-x-5">
                <div className="w-[160px] h-[180px] drop-shadow-lg bg-white rounded-[2vw] flex flex-col justify-center items-center">
                    <span className="text-[#2A374C] font-bold">Sensação Térmica</span>
                    <span className="text-[#2A374C] text-6xl font-bold flex mt-5"> <WiThermometer /> 30°</span>
                </div>
                <div className="w-[160px] h-[180px] drop-shadow-lg bg-white rounded-[2vw] flex flex-col justify-center items-center">
                    <span className="text-[#2A374C] font-bold">Chance de Chuva</span>
                    <span className="text-[#2A374C] text-6xl font-bold flex mt-5"> <WiRaindrop /> 0%</span>
                </div>
            </div>

            <div className="flex justify-center items-center space-x-5">
                <div className="w-[160px] h-[180px] drop-shadow-lg bg-white rounded-[2vw] flex flex-col justify-center items-center">
                    <span className="text-[#2A374C] font-bold">Vento</span>
                    <span className="text-[#2A374C] text-6xl font-bold flex items-center mt-5"> <WiStrongWind /> 2 <span className="text-base">km/h</span>  </span>
                </div>
                <div className="w-[160px] h-[180px] drop-shadow-lg bg-white rounded-[2vw] flex flex-col justify-center items-center">
                    <span className="text-[#2A374C] font-bold">Índice UV</span>
                    <span className="text-[#2A374C] text-6xl font-bold flex mt-5"> <WiDaySunny /> 4</span>
                </div>
            </div>

        </div>

      </div>
    );
}
