import Image from "next/image";

import { FaFortAwesome } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-start items-center min-h-screen bg-[#E2EAF5]">    

        {/*Fundo Estático Para Mobile*/}   
        <Image src="/imagens/city-ulitsa-nochnoi_gorod-neon-doroga-mashini-150796.jpeg" alt="Tela de Fundo" fill className="z-0 object-cover md:hidden" />

        {/*Fundo Animado Para Desktop*/} 

        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover hidden md:block ">
            <source src="/videos/mylivewallpapers-com-Raining-Stars-QHD.mp4" type="video/mp4" />
        </video>


        <div className="flex flex-col  justify-center items-center w-[350px] h-[600px] z-50 space-y-7 mt-3">

          <div className="flex flex-col justify-center items-center">  
                <FaFortAwesome className="z-50 text-9xl"/>

                <div className="flex flex-col items-center ">
                    <h1 className="z-50 text-white text-5xl font-semibold font-serif">★ Castle ★</h1>
                    <h1 className="z-50 text-white text-3xl italic font-serif">Trips</h1>
                </div>
         </div>

        <div className="flex flex-col justify-center items-center space-y-3">
            <div className="w-[320px] md:w-[600px] p-2 bg-white/40 backdrop-blur-none border border-white  text-center text-white">
                <input type="text" className="w-[250px] md:w-[550px] h-[40px] bg-transparent text-[#001F53] font-serif text-center text-3xl outline-none"></input>
            </div>

            <div className="w-[320px] md:w-[600px] p-2 bg-white/40 backdrop-blur-none border border-white text-center text-white">
                <input type="password" className="w-[250px] md:w-[550px] h-[40px] bg-transparent text-[#001F53] font-serif text-center text-3xl outline-none"></input>
            </div>

            <button className="w-[320px] md:w-[600px] h-[60px] bg-[#001F53] font-serif text-1xl border border-white transform transition hover:scale-110 text-[18px]">Sign in</button>

            <div className=" w-[320px] md:w-[600px] flex justify-between">
                <button className="bg-transparent text-white font-serif transform transition hover:scale-110 text-[16px] font-semibold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Create Account</button>
                <button className="bg-transparent text-white font-serif transform transition hover:scale-110 text-[16px] font-semibold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Forgot Password</button>
            </div>

        </div>    

        
        <div className="flex justify-center items-center w-[320px] md:w-[600px] space-x-2">
            <div className="w-[285px] bg-white h-[1px]"></div>
            <h1 className="font-serif text-[18px] md:text-2xl">or</h1>
            <div className="w-[285px] bg-white h-[1px]"></div>
        </div>

        <div className="flex justify-center items-center space-x-4">

            <button className="w-[50px] h-[50px] bg-[#3C5B9B] flex justify-center items-center transform transition hover:scale-110"><FaFacebookF className="text-4xl text-white"/></button>
            <button className="w-[50px] h-[50px] bg-[#2CA9E1] flex justify-center items-center transform transition hover:scale-110"><FaXTwitter className="text-4xl text-white"/></button> 
            <button className="w-[50px] h-[50px] bg-[#F43E2A] flex justify-center items-center transform transition hover:scale-110"><TiSocialGooglePlus className="text-4xl text-white"/></button>
            <button className="hidden md:flex w-[50px] h-[50px] bg-[#49EA66] flex justify-center items-center transform transition hover:scale-110"><FaWhatsapp className="text-4xl text-white "/></button>
            <button className="hidden md:flex w-[50px] h-[50px] bg-[#DA3AB0] flex justify-center items-center transform transition hover:scale-110"><FaInstagram className="text-4xl text-white "/></button> 
        </div>

        </div>

    </div> 
  );
}
