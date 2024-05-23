import LetalkLogo from "@/assets/icons/companies/letalk"
import { TechnologiesNames } from "./OthersData"
import { ReactNode } from "react"
import { PersonStanding, LucideTestTube2 } from "lucide-react"

const oldProjectsList =[
    {
        name: "Semear App",
        date: "10/09/2019",
        foudation: "Startup Mobpoint",
        description: "",
		images: [""],
        link: "https://play.google.com/store/apps/details?id=com.mobpoint.refugio",
        technologies:[
            'Flutter',
            'Dart',
        ]
    },
    {
        name: "Dobuy App",
        date: "10/09/2019",
        foudation: "Startup Allkmia",
        description: "",
        link: "https://dobuy.site/",
        technologies:[
            'Flutter',
            'Dart',
        ]
    },
    {
        name: "Mobpoint Site",
        date: "10/09/2019",
        foudation: "Startup Mobpoint",
        description: "",
        image: "image/projects/default.png",
        link: "#",
        technologies:[
            'Laravel',
            'PHP'
        ]
    },
    {
        name: "Boob",
        date: "10/09/2019",
        foudation: "Pessoal",
        description: "",
        image: "image/projects/default.png",
        link: "https://github.com/Mastercliff",
        technologies:[
            'Flutter',
            'Dart',
        ]
    },
    {
        name: "Este Site",
        date: "10/09/2019",
        foudation: "Pessoal",
        description: "",
        image: "image/projects/this.jpeg",
        link: "https://github.com/Mastercliff",
        technologies:[
           'React Js',
           'Javascript',
           'SCSS',
        ]
    },
]

export type ProjectListItem = {
	title: string,
	company: string,
	resume: string,
	description?: string,
	images: string[],
	logo: any,
	companyLink: string,
	mainColor: string,
	technologies: TechnologiesNames[]
}

const mainProjectsList: ProjectListItem[] = [
	{
        title: "Aplicações Web e API's",
        company: "Letalk",
        resume: "Durante meu contrato com a Letalk desenvolvi alguns projetos interessantes, com envolvimento direto em todas as fases de uma demanda.",
		images: ["images/letalk/one.png", "images/demos/one.jpg", "images/demos/one.jpg", "images/demos/one.jpg"],
		logo: <LetalkLogo/>,
        companyLink: "https://letalk.com.br/",
		mainColor: "purple",
        technologies: [
			"node",
			"react",
			"typescript",
			"awss"
		]
    },

	{
        title: "Aplicações Mobile e API's",
        company: "Mobpoint",
        resume: "Na Mobpoint era responsável pelo gerenciamento dos projetos que incluiam desde Apps até Web API's complexas.",
		images: ["images/letalk/one.png", "images/demos/one.jpg", "images/demos/one.jpg", "images/demos/one.jpg"],
		logo: <img src="images/mobpoint/logo.png" width={110}/>,
        companyLink: "",
		mainColor: "purple",
        technologies: [
			"node",
			"react",
			"typescript",
			"awss"
		]
    },
]

const allProjectsList: ProjectListItem[] = [
	{
        title: "Inbox Letalk",
        company: "Letalk",
        resume: "Este é um projeto completo que consiste em Frontend e Backend de um gerenciador de disparos em massa, respostas automáticas e envio de mensagens via Whatsapp",
		images: ["images/letalk/one.png", "images/letalk/two.png", "images/letalk/three.png", "images/letalk/four.png"],
		logo: <LetalkLogo height={32} width={24}/>,
        companyLink: "https://letalk.com.br/",
		mainColor: "purple",
        technologies: [
			"node",
			"react",
			"typescript",
			"awss",
			"redis",
			"postgresql",
			"mongodb"
		]
	},

	{
        title: "App Refúgio",
        company: "Mobpoint",
        resume: "Uma aplicação que conta com Frontend e Backend, criado pra facilitar a venda e troca de produtos relacionados à apicultura. Posteriormente teve seu nome trocado para Semear",
		images: ["images/letalk/one.png", "images/demos/one.jpg", "images/demos/one.jpg", "images/demos/one.jpg"],
		logo: <img src="images/mobpoint/logo.png" width={34}/>,
        companyLink: "https://letalk.com.br/",
		mainColor: "purple",
        technologies: [
			"laravel",
			"flutter",
			"node",
			"redis"
		]
	},

	{
        title: "Admin Unkless",
        company: "Alkkmia",
        resume: "Painel da Unkless feito pra gerenciar os clientes da empresa, contando com sistema de balances relatórios automáticos.",
		images: ["images/letalk/one.png", "images/demos/one.jpg", "images/demos/one.jpg", "images/demos/one.jpg"],
		logo: <LucideTestTube2 size={23}/>,
        companyLink: "https://letalk.com.br/",
		mainColor: "purple",
        technologies: [
			"node",
			"nextjs",
			"typescript",
			"redis"
		]
	},

	{
        title: "Dobuy",
        company: "Alkkmia",
        resume: "Um app pra gerenciar suas carteiras em Ethereum, Bitcoin e outras moedas nacionais e internacionais.",
		images: ["images/letalk/one.png", "images/demos/one.jpg", "images/demos/one.jpg", "images/demos/one.jpg"],
		logo: <LucideTestTube2 size={23}/>,
        companyLink: "https://letalk.com.br/",
		mainColor: "purple",
        technologies: [
			"flutter",
			"dart",
			"php"
		]
	},

	{
        title: "Schedule Api",
        company: "Letalk",
        resume: "Uma aplicação externa que gerencia as operações agendadas da Letalk.",
		images: ["images/letalk/one.png", "images/demos/one.jpg", "images/demos/one.jpg", "images/demos/one.jpg"],
		logo: <LetalkLogo height={32} width={24}/>,
        companyLink: "https://letalk.com.br/",
		mainColor: "purple",
        technologies: [
			"node",
			"typescript",
			"mongodb",
			"redis"
		]
	},

	{
        title: "Guma",
        company: "Projeto Pessoal",
        resume: "Uma aplicação feita totalmente em flutter com intuíto de ampliar as funcionalidades dos apps de notas",
		images: ["images/letalk/one.png", "images/demos/one.jpg", "images/demos/one.jpg", "images/demos/one.jpg"],
		logo: <img src="images/logo-color.png" width={34}/>,
        companyLink: "https://letalk.com.br/",
		mainColor: "purple",
        technologies: [
			"flutter",
			"dart"
		]
	},
]

export {
	mainProjectsList,
	allProjectsList
};