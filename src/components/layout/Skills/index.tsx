import { technologiesInfos } from "@/data/OthersData"
import { Album, Atom } from "lucide-react"
import { baseInterfaceClasses } from "@/constants/theme-constants"

export default function Skills() {
	const skillsList = Object.keys(technologiesInfos)

	return <div>

		<div className="flex flex-row justify-center space-x-2 mb-8 text-white/80">
			<Atom size={32}/> <div className="font-medium text-2xl">Minhas Habilidades</div>
		</div>

		<div className="grid grid-cols-6 max-w-[1200px] gap-2">
				{
					skillsList.map(skill => {
						const tech = technologiesInfos[skill]
						const textColor = `text-` + tech.color

						return <div className={`${baseInterfaceClasses} flex flex-col items-center justify-center h-[170px] px-9 space-y-2 text-white/60 hover:ring-white/10 text-pink-500`.replace("text-pink-500", "")}>
							<i className={`text-white ${tech.icon} text-4xl`}></i>
							<div className={`font-medium ${textColor}`}> {tech.title} </div>
						</div>
					})
				}
		</div>
	</div> 
}