import Card from "@/components/shared/Card";
import { ReactNode } from "react";

type MarkCardProps = {
	images: string[]
	title: string
	resume: string
	company: string
	logo: JSX.Element
	seeMoreButton?: ReactNode
}

export default function MarkCard ({ images, title, resume, logo, company, seeMoreButton }: MarkCardProps) {

	const Logo = logo

	return <Card>
		<div className="flex flex-row space-x-4 w-full">
			<div className="hidden sm:flex flex-col justify-center items-center h-[200px] w-[200px] bg-gray-600/10 rounded-xl flex-none backdrop-blur-md">
				{Logo}
			</div>


			<div className="flex flex-col justify-between">
				<div>
				<div className="font-bold text-lg">
					{title}
				</div>

				<div className="font-bold text-sm mb-2 text-gray-400">
					{company}
				</div>

				<div className="mb-4 sm:mb-0">
					{resume}
				</div>
				</div>

				{
					seeMoreButton && <div className="flex flex-row space-x-2">
							{seeMoreButton}
						</div>
				}
			</div>
		</div> 
	</Card>
}