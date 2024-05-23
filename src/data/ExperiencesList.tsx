import { ReactNode } from "react";
import LetalkLogo from "@/assets/icons/companies/letalk"
import { LucideTestTube2 } from "lucide-react";

export type ExperiencesListItem = {
	title: string,
	company: string,
	companyLogo: ReactNode
	description: string, 
	duration: string,
	technologies: string[],
	workHere?: boolean
}

const allExperiencesList: ExperiencesListItem[] = [
    {
		title: 'Desenvolvedor FullStack',
		company: 'Startup Mobpoint',
		description: "Encarregado pelo desenvolvimento e manutenção de aplicações Web, Mobile e Api's. Principal responsável pelo desenvolvimento do app Refúgio/Semear.", 
		duration: '11/2019 - 03/2021',
		companyLogo: <img src="images/mobpoint/logo.png" width={34}/>,
		technologies: [
			'flutter',
			'laravel',
			'php',
			'javascript',
			'mysql'
		]
	},
	{
		title: 'Desenvolvedor FrontEnd',
		company: 'Startup Alkkmia',
		description: "Desenvolvedor de aplicações web, mobile e suporte da empresa para terceiros.", 
		duration: '03/2021 - 08/2021',
		companyLogo: <LucideTestTube2 size={23}/>,
		technologies: [
			'flutter',
			'reactjs',
			'node',
			'nextjs',
			'javascript',
			'typescript',
		]
	},
	{
		title: 'Desenvolvedor FullStack',
		company: 'Letalk',
		description: "Desenvolvedor de aplicações web, mobile e suporte da empresa para terceiros.", 
		duration: '10/2021 - 11/2023',
		companyLogo: <LetalkLogo height={32} width={24}/>,
		technologies: [
			'flutter',
			'reactjs',
			'node',
			'nextjs',
			'javascript',
			'typescript',
		]
	},
	{
		title: 'Desenvolvedor FullStack Freelancer',
		company: 'Startup Alkkmia',
		description: "Desenvolvedor de aplicações web, mobile e suporte da empresa para terceiros.", 
		duration: '11/2023 - 02/2024',
		companyLogo: <LucideTestTube2 size={23}/>,
		technologies: [
			'flutter',
			'reactjs',
			'node',
			'nextjs',
			'javascript',
			'typescript',
		]
	},
	{
		title: 'Desenvolvedor FullStack Freelancer',
		company: 'Letalk',
		description: "Desenvolvedor de aplicações web, mobile e suporte da empresa para terceiros.", 
		duration: '11/2023 - Hoje',
		companyLogo: <LetalkLogo height={32} width={24}/>,
		workHere: true,
		technologies: [
			'flutter',
			'reactjs',
			'node',
			'nextjs',
			'javascript',
			'typescript',
		]
	},
]

export {
	allExperiencesList
};