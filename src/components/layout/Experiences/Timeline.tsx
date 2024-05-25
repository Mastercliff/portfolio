import { ExperiencesListItem } from "@/data/ExperiencesList";
import { ChevronDown, Home } from "lucide-react";
import TimelineCard from "./TimelineCard";

type TimelineProps = {
	data: ExperiencesListItem[]
}

export default function Timeline({ data } : TimelineProps) {
	return <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

		{
			data.map((experience) => {
				return <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

				<div className={`flex items-center justify-center w-10 h-10 rounded-full border border-transparent bg-slate-300 group-[.is-active]:bg-gray-700 border-white-10 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${experience?.workHere ? "" : ""}`}>
					{ experience?.workHere ?  <Home className="text-white/70" size={18}/> :<ChevronDown/> }
				</div>
		
					<TimelineCard experience={experience}/>
				</div>
			})
		}

	</div>
}