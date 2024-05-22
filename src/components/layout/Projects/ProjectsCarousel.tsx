import { TechnologiesNames } from "@/data/OthersData";
import ProjectCard from "./ProjectCard";
import { ProjectListItem } from "@/data/ProjectsData";

type ProjectsCarouselProps = {
	data: Array<ProjectListItem>
}

export default function ProjectsCarousel({ data }: ProjectsCarouselProps) {
	return <div className="flex space-x-4 overflow-x-auto w-full no-scrollbar py-2">
		{
			data.map(project => (<div className="w-[960px]">
				<ProjectCard title={project.title} description={project.description} images={project.images} technologies={project.technologies} logo={project.logo}/>
			</div>))
		}
	</div>
}