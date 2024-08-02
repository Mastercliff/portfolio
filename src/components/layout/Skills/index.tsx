import { technologiesInfos } from "@/data/OthersData"
import { Album, Atom } from "lucide-react"
import { baseInterfaceClasses } from "@/constants/theme-constants"

export default function Skills() {
	const skillsList = Object.keys(technologiesInfos)

	return <div className="w-full">

		<div className="flex flex-row justify-start space-x-2 mb-8 text-white/80 w-full">
			<Atom/> <div className="font-medium text-xl">Minhas Habilidades</div>
		</div>

		<div className="flex flex-row flex-wrap justify-center gap-4">
				{
					skillsList.map(skill => {
						const tech = technologiesInfos[skill]
						const textColor = `text-` + tech.color

						return <div className={`${baseInterfaceClasses} flex flex-col items-center rounded-2xl justify-center ring-gray-800/40 w-[145px] h-[135px] space-y-2 text-white/60 hover:ring-white/10 text-pink-500`.replace("text-pink-500", "")}>
							<i className={`text-white ${tech.icon} text-4xl`}></i>
							<div className={`font-medium ${textColor}`}> {tech.title} </div>
						</div>
					})
				}
		</div>
	</div> 
}