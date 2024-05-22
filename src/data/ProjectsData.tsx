import LetalkLogo from "@/assets/icons/companies/letalk"
import { TechnologiesNames } from "./OthersData"
import { ReactNode } from "react"

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
	description: string,
	images: string[],
	logo: any,
	companyLink: string,
	mainColor: string,
	technologies: TechnologiesNames[]
}

const projectsList: ProjectListItem[] = [
	{
        title: "Letalk Sites",
        company: "Letalk",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
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
        title: "Letalk Sites",
        company: "Letalk",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
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
]

export default projectsList;