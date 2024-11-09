import { baseInterfaceClasses } from "@/constants/theme-constants"
import { ReactNode } from "react"

type CardProps = {
	title?: ReactNode,
	children: ReactNode,
	customClass?: string,
	onClick?: () => Promise<void> | void
}

export default function Card(props: CardProps) {
	const {
		children,
		title,
		customClass,
		onClick
	} = props
	return <div className={`${baseInterfaceClasses} p-6 w-full h-full ${customClass}`} style={{
		//backgroundColor: "rgb(0 0 0 / 15%)"
	}} onClick={onClick}>
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