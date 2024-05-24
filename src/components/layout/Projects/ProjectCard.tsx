import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";
import Chip from "@/components/shared/Chip";
import Dialog from "@/components/shared/Dialog";
import { TechnologiesNames, technologiesInfos } from "@/data/OthersData";
import { Images, Globe2 } from "lucide-react";
import { ReactNode, useState } from "react";
import ImagesCarousel from "./ImagesCarousel";

type ProjectCardProps = {
	images: string[];
	title: string;
	resume: string;
	company: string;
	logo: JSX.Element;
	technologies: Array<TechnologiesNames>;
	seeMoreButton?: ReactNode;
	companyLink?: string;
};

export default function ProjectCard({
	images,
	title,
	resume,
	technologies,
	logo,
	company,
	seeMoreButton,
	companyLink
}: ProjectCardProps) {
	const [dialogOpen, setDialogOpen] = useState(false);

	const OPTIONS = { loop: true }

	const Logo = logo;

	return (
		<Card customClass="transition-all duration-500 bg-gradient-to-tl from-slate-900 via-slate-800 to-slate-900/70 bg-size-200 bg-pos-100 hover:bg-pos-0 cursor-pointer">
			<div className="flex flex-col">
				<div className="flex flex-row space-x-4 w-full">
					<div className="flex flex-col justify-center items-center h-[50px] w-[50px] bg-gray-600/10 rounded-xl flex-none backdrop-blur-md">
						{Logo}
					</div>

					<div className="flex flex-col justify-between">
						<div>
							<div className="font-bold text-lg">{title}</div>

							<div className="font-bold text-sm mb-2 text-gray-400">
								{company}
							</div>

							<div>{resume}</div>
						</div>

						{seeMoreButton && (
							<div className="flex flex-row space-x-2">{seeMoreButton}</div>
						)}
					</div>
				</div>
				{technologies && (
					<div className="flex-row flex-wrap gap-2 mt-5 justify-center mobile:hidden lg:flex">
						{technologies.map((technologieName, index) => {
							const technologieInfo = technologiesInfos[technologieName];

							if (index <= 3) {
								return (
									<Chip
										icon={<i className={technologieInfo.icon}></i>}
										title={technologieInfo.title}
										color="custom"
										customColor={`bg-${technologieInfo.color}/10 text-${technologieInfo.color}`}
									/>
								);
							}
						})}
					</div>
				)}

				<div className="flex flex-row justify-center mt-6">
					<Button
						startIcon={<Images size={16} />}
						variant="flat"
						onClick={() => {
							setDialogOpen(true);
						}}
					>
						Ver mais sobre o projeto
					</Button>

					<Dialog
						size="lg"
						open={dialogOpen}
						setOpen={setDialogOpen}
						title={title}
						content={
							<div className="flex flex-row justify-center">
								<div className="flex flex-col space-y-6 items-center px-10">
									<div className="w-full"> 
											<ImagesCarousel slides={images} options={OPTIONS}/>
									</div>

									<p className="mt-2 text-md text-white/90 text-center">
										{resume}
									</p>

									{technologies && (
										<div className="flex flex-row flex-wrap gap-2 mt-5 justify-center w-full">
											{technologies.map((technologieName, index) => {
												const technologieInfo =
													technologiesInfos[technologieName];

												return (
													<Chip
														icon={<i className={technologieInfo.icon}></i>}
														title={technologieInfo.title}
														color="custom"
														customColor={`bg-${technologieInfo.color}/10 text-${technologieInfo.color}`}
													/>
												);
											})}
										</div>
									)}

									<div className="flex flex-row justify-center items-center"> 
											<Chip
												variant="button"
												title={companyLink || ""}
												color="info"
												icon={<Globe2/>}
											/>
									</div>
								</div>


							</div>
						}
					/>
				</div>
			</div>
		</Card>
	);
}
