import Pesquisa from "./_components/pesquisa"
import Corpo from "./_components/corpo";
import Coluna from "./_components/coluna";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-[#E2EAF5] p-2 space-y-10">
      <Pesquisa />
      <div className="flex flex-col sm:flex-row gap-14 ">
        <Corpo className="w-full sm:w-2/3"/>
        <Coluna className="w-full sm:w-1/3"/>
      </div>  
        

    </div>
  );
}
