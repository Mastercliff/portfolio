import { ProjectListItem } from "@/data/ProjectsData"
import ProjectCard from "./ProjectCard"
import { Grid2x2CheckIcon } from "lucide-react"

type ProjectsProps = {
	data: ProjectListItem[]
}

export default function Projects({ data }: ProjectsProps) {
	return <div className="">
		<div className="flex items-center justify-center text-2xl font-medium text-center text-white/80 mb-8"> <Grid2x2CheckIcon className="mr-2" size={32}/> Projetos em Que Trabalhei </div>
		<div className="grid rid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 max-w-[1200px] w-full">
		{
			data.map(project => (<ProjectCard {...project}/>))
		}
	</div>
	</div>
}