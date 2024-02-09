import { ReactNode } from "react"

type ButtonProps = {
	startIcon?: ReactNode
	children: ReactNode
	variant?: "link" | "outlined" | "default"
}

const buttonStyles = {
	base: "text-lg",
	default: "",
	link: "text-blue",
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