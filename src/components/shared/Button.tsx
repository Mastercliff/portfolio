import { ReactNode } from "react"

type ButtonProps = {
	startIcon?: ReactNode
	children?: ReactNode
	variant?: "link" | "outlined" | "default" | "flat"
	onClick?: () => void | Promise<void>
}

const buttonStyles = {
	base: "flex flex-row items-center justify-center  text-md px-4 py-2 rounded-lg hover:brightness-125",
	default: "",
	link: "p1 text-blue-300 rounded-md hover:underline hover:bg-slate-700 hover:text-blue-400",
	outlined: "",
	flat: "bg-blue-500/10 text-blue-500"
}

export default function Button ({ startIcon, children, variant = "default", onClick }: ButtonProps) {
	const variantClass = buttonStyles[variant]

	return <button className={`${buttonStyles.base} ${variantClass}`} onClick={onClick}>
		{startIcon && <span className="mr-1">
				{startIcon}
			</span>}
		{
			children
		}
	</button>
}