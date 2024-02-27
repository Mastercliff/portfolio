import { ReactNode } from "react"

type ButtonProps = {
	startIcon?: ReactNode
	children: ReactNode
	variant?: "link" | "outlined" | "default"
}

const buttonStyles = {
	base: "text-lg p-2",
	default: "",
	link: "p1 text-blue-300 rounded-md hover:underline hover:bg-slate-700 hover:text-blue-400",
	outlined: ""
}

export default function Button ({ startIcon, children, variant = "default" }: ButtonProps) {
	const variantClass = buttonStyles[variant]

	return <button className={`${buttonStyles.base} ${variantClass}`}>
		{startIcon && <span className="mr-1">
				{startIcon}
			</span>}
		{
			children
		}
	</button>
}