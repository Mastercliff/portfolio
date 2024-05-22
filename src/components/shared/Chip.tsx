import { ReactNode } from "react"
import { ChevronRight } from "lucide-react"

type ChipProps = {
	title: string,
	color: "success" | "error" | "info" | "custom",
	customColor?: string
	variant?: "button" | "text"
	icon?: ReactNode
	onClick?: () => void
}

export default function Chip({title, color, variant = "text", customColor, icon}: ChipProps) {
	const colorsSchemes = {
		"success": "bg-green-500/10 text-green-500",
		"error": "bg-red-500/10 text-red-500",
		"info": "bg-blue-500/10 text-blue-500"
	}

	let selectedColor = color === "custom"  ? customColor : colorsSchemes[color]

	const isButton = variant === "button"

	let customClass = `${selectedColor}`

	if(isButton) {
		customClass = `${customClass} cursor-pointer`
	}
	

	return <div className={`flex flex-nowrap items-center ${customClass} p-1 pl-4 pr-4 rounded-2xl hover:brightness-125`}>
		{
			icon && <span className="mr-2">
				{icon}
			</span>
		}
		<span className={`text-md font-medium ${isButton ? "text-sm" : ""}`}>
			{title}
		</span>
	</div>
}