import { TechnologiesNames } from "@/data/OthersData";
import MarkCard from "./MarkCard";
import { ProjectListItem } from "@/data/ProjectsData";
import Chip from "@/components/shared/Chip";
import { Sparkles } from "lucide-react";

type MarksListProps = {
	data: Array<ProjectListItem>
	expRef: any
}

export default function MarksList({ data, expRef }: MarksListProps) {
	const executeScroll = () => {
		if(expRef && expRef?.current) {
			expRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	} 

	return <div className="flex gap-4 overflow-x-auto max-w-[1200px] w-full no-scrollbar py-2 mobile:flex-col lg:flex-row">
		{
			data.map(project => (<MarkCard
				{...project}
				seeMoreButton={
					<Chip
						icon={<Sparkles size={18}/>}
						title="Ver mais sobre este marco"
						variant="button"
						color="info"
						onClick={() => {
							executeScroll()
						}}
					/>
				}
			/>))
		}
	</div>
}