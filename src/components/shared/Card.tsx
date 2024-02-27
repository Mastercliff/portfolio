import { baseInterfaceClasses } from "@/constants/theme-constants"
import { ReactNode } from "react"

type CardProps = {
	title?: ReactNode,
	children: ReactNode
}

export default function Card(props: CardProps) {
	const {
		children,
		title
	} = props
	return <div className={`${baseInterfaceClasses} p-4 w-full h-full drop-shadow-md`} style={{
		backgroundColor: "#33415541"
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