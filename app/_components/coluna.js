import { WiDayCloudy } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiDayCloudyWindy } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiRainMix } from "react-icons/wi";

export default function Coluna() {
  return (
    <div className="flex flex-col justify-center items-center w-[340px] bg-white p-5 rounded-[2vw] gap-3 drop-shadow-lg">
      
    {/*Segunda*/}  
      <div className="flex items-center w-full">

        <div className="w-[113px] flex justify-start">
          <span className="text-[#2A374C]">Segunda</span>
        </div>

        <div className="w-[113px] flex justify-center">
          <WiDayCloudy className="text-6xl text-gray-400" />
        </div>

        <div className="w-[113px] flex justify-end">
          <div className="flex space-x-2 items-center">
            <span className="text-black font-bold text-xl">29°</span>
            <span className="text-[#2A374C] font-bold text-xl">23</span>
          </div>
        </div>

      </div>

    {/*Terça*/}  
      <div className="flex items-center w-full">
        
        <div className="w-[113px] flex justify-start">
          <span className="text-[#2A374C]">Terça</span>
        </div>

        <div className="w-[113px] flex justify-center">
          <WiDaySunny className="text-6xl text-yellow-500" />
        </div>

        <div className="w-[113px] flex justify-end">
          <div className="flex space-x-2 items-center">
            <span className="text-black font-bold text-xl">33°</span>
            <span className="text-[#2A374C] font-bold text-xl">27</span>
          </div>
        </div>
        
      </div>

    {/*Quarta*/}  
      <div className="flex items-center w-full">

        <div className="w-[113px] flex justify-start">
          <span className="text-[#2A374C]">Quarta</span>
        </div>

        <div className="w-[113px] flex justify-center">
          <WiDaySunny className="text-6xl text-yellow-500" />
        </div>

        <div className="w-[113px] flex justify-end">
          <div className="flex space-x-2 items-center">
            <span className="text-black font-bold text-xl">32°</span>
            <span className="text-[#2A374C] font-bold text-xl">26</span>
          </div>
        </div>

      </div>

    {/*Quinta*/}  
      <div className="flex justify-between items-center w-full">

        <div className="w-[113px] flex justify-start">
          <span className="text-[#2A374C]">Quinta</span>
        </div>
        
        <div className="w-[113px] flex justify-center">
          <WiDayCloudyWindy className="text-6xl text-gray-500" />
        </div>

        <div className="w-[113px] flex justify-end">
          <div className="flex space-x-2 items-center">
            <span className="text-black font-bold text-xl">30°</span>
            <span className="text-[#2A374C] font-bold text-xl">24</span>
          </div>
        </div>

      </div>


    {/*Sexta*/}  
      <div className="flex justify-between items-center w-full">

        <div className="w-[113px] flex justify-start">
          <span className="text-[#2A374C]">Sexta</span>
        </div>

        <div className="w-[113px] flex justify-center">
          <WiCloud className="text-6xl text-gray-700" />
        </div>

        <div className="w-[113px] flex justify-end">
          <div className="flex space-x-2 items-center">
            <span className="text-black font-bold text-xl">28°</span>
            <span className="text-[#2A374C] font-bold text-xl">22</span>
          </div>
        </div>

      </div>


    {/*Sabádo*/}  
      <div className="flex justify-between items-center w-full">

        <div className="w-[113px] flex justify-start">
          <span className="text-[#2A374C]">Sabádo</span>
        </div>

        <div className="w-[113px] flex justify-center">
          <WiRainMix className="text-6xl text-gray-900" />
        </div>

        <div className="w-[113px] flex justify-end">
          <div className="flex space-x-2 items-center">
            <span className="text-black font-bold text-xl">26°</span>
            <span className="text-[#2A374C] font-bold text-xl">20</span>
          </div>
        </div>

      </div>


    {/*Domingo*/}  
      <div className="flex justify-between items-center w-full">

        <div className="w-[113px] flex justify-start">
          <span className="text-[#2A374C]">Domingo</span>
        </div>

        <div className="w-[113px] flex justify-center">
          <WiDayCloudy className="text-6xl text-gray-500" />
        </div>

        <div className="w-[113px] flex justify-end">
          <div className="flex space-x-2 items-center">
            <span className="text-black font-bold text-xl">30°</span>
            <span className="text-[#2A374C] font-bold text-xl">25</span>
          </div>
        </div>
        
      </div>

    </div>
  );
}
