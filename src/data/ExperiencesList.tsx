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
		title: 'Fullstack Dev.',
		company: 'Startup Mobpoint',
		description: "Encarregado pelo desenvolvimento e manutenção de aplicações Web, Mobile e Api's. Principal responsável pelo desenvolvimento do app Refúgio/Semear.", 
		duration: '11/2019 - 03/2021',
		companyLogo: <img src="images/mobpoint/logo.png" width={34}/>,
		technologies: [
			'flutter',
			'laravel',
			'dart',
			'php',
			'javascript',
			'mysql',
			'css',
			'vue',
			'redis'
		]
	},
	{
		title: 'Frontend Dev.',
		company: 'Startup Alkkmia',
		description: "Desenvolvedor de aplicações web, mobile e suporte da empresa para terceiros.", 
		duration: '03/2021 - 08/2021',
		companyLogo: <LucideTestTube2 size={23}/>,
		technologies: [
			'flutter',
			'react',
			'dart',
			'nextjs',
			'typescript',
			'javascript',
			'css',
			'sass'
		]
	},
	{
		title: 'Fullstack Dev.',
		company: 'Letalk',
		description: "Criava novas funcionalidades, atualizava e corrigia funções antigas e melhorava a UI/UX das principais aplicações da empresa, sempre operando no backend e frontend.", 
		duration: '10/2021 - 11/2023',
		companyLogo: <LetalkLogo height={32} width={24}/>,
		technologies: [
			'node',
			'react',
			'awss',
			'javascript',
			'typescript',
			'postgresql',
			'mongodb',
			'redis',
			'css',
			'html'
		]
	},
	{
		title: 'Fullstack Dev. Freelancer',
		company: 'Startup Alkkmia',
		description: "Responsável pelo desenvolvimento da aplicação principal da empresa e de algumas aplicações de terceiros.", 
		duration: '11/2023 - 02/2024',
		companyLogo: <LucideTestTube2 size={23}/>,
		technologies: [
			'nextjs',
			'react',
			'node',
			'tailwindcss',
			'javascript',
			'typescript',
		]
	},
	{
		title: 'Fullstack Dev. Freelancer',
		company: 'Letalk',
		description: "Manutenção de pequenas funcionalidades e criação de novas funções.", 
		duration: '11/2023 - Hoje',
		companyLogo: <LetalkLogo height={32} width={24}/>,
		workHere: true,
		technologies: [
			'node',
			'react',
			'awss',
			'javascript',
			'typescript',
			'postgresql',
			'mongodb',
			'redis',
			'css',
			'html'
		]
	},
]

export {
	allExperiencesList
};