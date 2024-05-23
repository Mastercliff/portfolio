import Card from "@/components/shared/Card";
import Chip from "@/components/shared/Chip";
import { ExperiencesListItem } from "@/data/ExperiencesList";

type TimelineCard = {
	experience: ExperiencesListItem
}

export default function TimelineCard({ experience }: TimelineCard) {
	return <Card customClass="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-2.5rem)]">
		<div className="flex items-center justify-between space-x-2 mb-2">
			<div className="flex items-center space-x-2">
				<div className="flex flex-col justify-center items-center h-[45px] w-[45px] bg-gray-600/10 rounded-xl flex-none backdrop-blur-md">
					{experience.companyLogo}
				</div>
				<div>
					<div className="font-bold text-white/80">{experience.title}</div>
					<div className="font-bold text-white/60 text-sm">{experience.company}</div>
				</div>
			</div>
			<Chip title={experience.duration} color="success"/>
		</div>
		<div className="text-slate-500">{experience.description}</div>
	</Card>
}