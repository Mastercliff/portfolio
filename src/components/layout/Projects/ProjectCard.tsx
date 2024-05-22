import Card from "@/components/shared/Card";
import Chip from "@/components/shared/Chip";
import { TechnologiesNames, technologiesBadges } from "@/data/OthersData";
import { Sparkles } from "lucide-react"

type ProjectCardProps = {
	images: string[]
	title: string
	description: string
	logo: JSX.Element
	technologies: Array<TechnologiesNames>
}

export default function ProjectCard ({ images, title, description, technologies, logo}: ProjectCardProps) {

	const Logo = logo

	return <Card>
		<div className="flex flex-row space-x-4 w-full">
			<div className="flex flex-col justify-center items-center h-[200px] w-[200px] bg-gray-600/10 rounded-xl flex-none backdrop-blur-md">
				{Logo}
			</div>


			<div className="flex flex-col justify-between">
				<div>
				<div className="font-bold text-lg mb-2">
					{title}
				</div>

				<div>
					{description}
				</div>
				</div>

				<div className="flex flex-row space-x-2">
					<Chip
						icon={<Sparkles size={18}/>}
						title="Ver mais sobre este projeto"
						variant="button"
						color="info"
						onClick={() => {}}
					/>
				</div>
			</div>
		</div> 
	</Card>
}