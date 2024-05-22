import Chip from "@/components/shared/Chip";

const skillList = [
    {
        name: "Flutter",
        status: 4,
    },
    {
        name: "Dart",
        status: 4,
    },
    {
        name: "Laravel",
        status: 2,
    },
    {
        name: "PHP",
        status: 2,
    },
    {
        name: "React",
        status: 2,
    },
    {
        name: "Javascript",
        status: 4,
    },
    {
        name: "HTML",
        status: 4,
    },
    {
        name: "CSS",
        status: 4,
    },
    {
        name: "SCSS",
        status: 3,
    },
    {
        name: "Typescript",
        status: 2,
    },
    {
        name: "Node JS",
        status: 2,
    },
    {
        name: "Next JS",
        status: 1,
    },
    {
        name: "Mysql",
        status: 2,
    },
    {
        name: "Linux",
        status: 4,
    }
]

const technologiesBadges = {
	node: <Chip
		color="success"
		title="Node"
		icon={<i className="devicon-nodejs-plain-wordmark colored"></i>}
	/>,
	typescript: <Chip
		color="custom"
		customColor="bg-blue-600/10 text-blue-600"
		title="Typescript"
		icon={<i className="devicon-typescript-plain colored"></i>}
	/>,
	react: <Chip
		color="info"
		title="React"
		icon={<i className="devicon-react-original colored"></i>}
	/>,
	php: <Chip
		color="custom"
		customColor="bg-purple-500/10 text-purple-500"
		title="PHP"
		icon={<i className="devicon-php-plain colored"></i>}
	/>,
	laravel: <Chip
		color="custom"
		customColor="bg-red-500/10 text-red-500"
		title="Laravel"
		icon={<i className="devicon-laravel-original colored"></i>}
	/>,
	flutter: <Chip
		color="info"
		title="Flutter"
		icon={<i className="devicon-flutter-plain colored"></i>}
	/>,
	python: <Chip
		color="custom"
		customColor="bg-yellow-500/10 text-yellow-500"
		title="Python"
		icon={<i className="devicon-python-plain colored"></i>}
	/>,
	awss: <Chip
		color="custom"
		customColor="bg-orange-500/10 text-orange-500"
		title="AWS Services"
		icon={<i className="devicon-amazonwebservices-plain-wordmark colored"></i>}
/>
}

export type TechnologiesNames = keyof typeof technologiesBadges


export {
	skillList,
	technologiesBadges
};