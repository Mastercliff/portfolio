import { baseInterfaceClasses } from "@/constants/theme-constants"
import { ReactNode } from "react"

type CardProps = {
	title?: ReactNode,
	children: ReactNode,
	customClass?: string 
}

export default function Card(props: CardProps) {
	const {
		children,
		title,
		customClass
	} = props
	return <div className={`${baseInterfaceClasses} p-6 w-full h-full ${customClass}`} style={{
		//backgroundColor: "rgb(0 0 0 / 15%)"
	}}>
		{
			title && <div>
				{title}
			</div>
		}
		<div className="h-full">
			{children}
		</div>
	</div>
}