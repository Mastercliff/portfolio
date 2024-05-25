import Profile from "@/components/layout/Profile";
import Projects from "@/components/layout/Projects";
import MarksList from "@/components/layout/Marks/MarksList";
import { allProjectsList, mainProjectsList } from "@/data/ProjectsData";
import { ChevronDown, Dna } from 'lucide-react';
import { useRef } from "react";
import Comments from "@/components/layout/Comments";
import { allCommentsList } from "@/data/CommentsData";
import Experiences from "@/components/layout/Experiences";
import { allExperiencesList } from "@/data/ExperiencesList";
import Skills from "@/components/layout/Skills";
import Contacts from "@/components/layout/Contacts";

export default function MainPage() {
	const projectsRef: any = useRef(null)

	const expRef: any = useRef(null)

	const executeScroll = () => {
		if(projectsRef && projectsRef?.current) {
			projectsRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	} 

	return <main className="flex flex-col p-4 items-center space-y-6">

		<div className="w-full mb-4">
			<div className="flex flex-col justify-between items-middle w-full">
				<div className="flex flex-row justify-center items-center text-center font-medium text-2xl text-white"><span className="mr-2">Bem vindo(a)</span> <i className="devicon-bash-plain" style={{marginTop: "7px"}}></i></div>
			</div>
		</div>

		<div className="max-w-[1200px] w-full">
			<Profile/>
		</div>

		<div className="max-w-[1200px] overflow-x-auto">
			<div className="flex items-center text-xl font-medium text-left text-white/80 mb-2 mt-5"> <Dna className="mr-2"/> Marcos Importantes </div>
			<MarksList expRef={expRef} data={mainProjectsList}/>
		</div>

		<div className="max-w-1200px] mt-8">
			<div className="flex justify-center">
				<div onClick={executeScroll} className="rounded-full bg-blue-500/10 p-4 shadow-md cursor-pointer ring-1 ring-inset ring-white/5">
					<ChevronDown className="text-blue-400" size={32}/>
				</div>
			</div>
		</div>

		<div className="max-w-1200px]">
			<div className="mt-16" ref={projectsRef}>
				<Projects data={allProjectsList}/>
			</div>
		</div>

		<div className="max-w-1200px]">
			<div className="mt-28">
				<Skills />
			</div>
		</div>

		<div className="max-w-1200px]">
			<div className="mt-28" ref={expRef}>
				<Experiences data={allExperiencesList}/>
			</div>
		</div>

		<div className="max-w-1200px]">
			<div className="mt-16">
				<Comments comments={allCommentsList}/>
			</div>
		</div>

		<div className="max-w-1200px]">
			<div className="mt-16">
				<Contacts />
			</div>
		</div>
	</main>
}