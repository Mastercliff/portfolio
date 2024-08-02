import Card from "@/components/shared/Card";
import Chip from "@/components/shared/Chip";
import { ExperiencesListItem } from "@/data/ExperiencesList";
import { technologiesInfos } from "@/data/OthersData";

type TimelineCard = {
	experience: ExperiencesListItem
}

export default function TimelineCard({ experience }: TimelineCard) {
	return <div className={`w-[calc(100%-4rem)] rounded-3xl p-px md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-2.5rem)] ${experience.workHere ? 'bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800' : ''}`}>
		<Card customClass={`rounded-[calc(1.5rem-1px)] bg-gray-900 p-[26px] ring-1 ${experience.workHere ? 'ring-0' : ''}`}>
		<div className="flex items-start flex-col sm:items-center sm:flex-row justify-between mb-2 flex-wrap gap-2">
			<div className="flex items-center space-x-2 mb-4 sm:mb-0">
				<div className="flex justify-center items-center h-[45px] w-[45px] bg-gray-600/10 rounded-xl flex-none backdrop-blur-md">
					{experience.companyLogo}
				</div>
				<div>
					<div className="font-bold text-white/80">{experience.title}</div>
					<div className="font-bold text-white/60 text-sm">{experience.company}</div>
				</div>
			</div>
			<Chip title={experience.duration} color={`${experience.workHere ? 'success' : 'info'}`}/>
		</div>
		<div className="text-slate-500">{experience.description}</div>

		<div className="flex flex-row gap-1 flex-wrap items-center">{experience.technologies.map(techName => {
			const tech = technologiesInfos[techName]
			return <div className={`rounded-full p-2 has-tooltip`}>
				<span className='tooltip rounded-xl shadow-xl p-2 px-4 bg-slate-800 text-white/80 mt-8 text-sm'>{tech.title}</span>
				<i className={tech.icon}></i>
			</div>
		})}</div>
	</Card>
	</div> 
}