import { Workflow } from "lucide-react";
import Timeline from "./Timeline";
import { ExperiencesListItem } from "@/data/ExperiencesList";

type ExperiencesProps = {
	data: ExperiencesListItem[]
}

export default function Experiences({ data } : ExperiencesProps) {
	return <div className="max-w-[1200px]">
		<div className="flex flex-row justify-center space-x-2 mb-8 text-white/80">
			<Workflow /> <div className="font-medium text-xl">Experiências de Trabalho</div>
		</div>
		<Timeline data={data}/>
	</div>
}