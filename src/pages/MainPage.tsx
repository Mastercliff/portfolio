import Profile from "@/components/layout/Profile";
import ProjectsCarousel from "@/components/layout/Projects/ProjectsCarousel";
import projectsList from "@/data/ProjectsData";
import { ChevronDown, Dna } from 'lucide-react';

export default function MainPage() {
	return <main className="flex flex-col p-4 items-center space-y-6">

		<div className="w-full mb-4">
			<div className="flex flex-col justify-between items-middle w-full">
				<div className="flex flex-row justify-center items-center text-center font-medium text-2xl text-white"><span className="mr-2">Bem vindo(a)</span> <i className="devicon-bash-plain" style={{marginTop: "7px"}}></i></div>
			</div>
		</div>

		<div className="w-[1200px]">
			<Profile/>
		</div>

		<div className="w-[1200px] overflow-x-auto">
			<div className="flex items-center text-xl font-medium text-left text-white/90 mb-2 mt-5"> <Dna className="mr-2"/> Principais Projetos em Que Trabalhei </div>
			<ProjectsCarousel data={projectsList}/>
		</div>

		<div className="w-1200px] mt-8">
			<div className="flex justify-center">
				<div className="rounded-full bg-blue-500/10 p-4 shadow-md cursor-pointer ring-1 ring-inset ring-white/5">
					<ChevronDown className="text-blue-400" size={32}/>
				</div>
			</div>
		</div>
	</main>
}