import Chip from "@/components/shared/Chip";
import { ReactNode } from "react";

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

const technologiesInfos: Record<string, {
	color: string,
	icon: ReactNode,
	title: string
}> = {
	node: {
		color: "green-500",
		icon: <i className="devicon-nodejs-plain-wordmark colored"></i>,
		title: "Node"
	},
	typescript: {
		color: "blue-600",
		icon: <i className="devicon-typescript-plain colored"></i>,
		title: "Typescript"
	},
	react: {
		color: "blue-500",
		icon: <i className="devicon-react-original colored"></i>,
		title: "React"
	},
	php: {
		color: "purple-500",
		icon: <i className="devicon-php-plain colored"></i>,
		title: "PHP"
	},
	laravel: {
		color: "red-500",
		icon: <i className="devicon-laravel-original colored"></i>,
		title: "Laravel"
	},
	flutter: {
		color: "blue-500",
		icon: <i className="devicon-flutter-plain colored"></i>,
		title: "Flutter"
	},
	python: {
		color: "yellow-500",
		icon: <i className="devicon-python-plain colored"></i>,
		title: "Python"
	},
	awss: {
			color: "orange-500",
			icon: <i className="devicon-amazonwebservices-plain-wordmark colored"></i>,
			title: "AWS Services"
	},
	redis: {
		color: "red-500",
		icon: <i className="devicon-redis-plain colored"></i>,
		title: "Redis"
	},
	postgresql: {
		color: "blue-600",
		icon: <i className="devicon-postgresql-plain colored"></i>,
		title: "Postgre SQL"
	},
	nextjs: {
		color: "gray-600",
		icon: <i className="devicon-nextjs-plain"></i>,
		title: "Next JS"
	},
	tailwindcss: {
		color: "blue-500",
		icon: <i className="devicon-tailwindcss-original colored"></i>,
		title: "Tailwindcss"
	},
	dart: {
		color: "blue-500",
		icon: <i className="devicon-dart-plain colored"></i>,
		title: "Dart"
	},
	mongodb: {
		color: "green-500",
		icon: <i className="devicon-mongodb-plain-wordmark colored"></i>,
		title: "Mongo DB"
	}
}

export type TechnologiesNames = keyof typeof technologiesInfos


export {
	skillList,
	technologiesInfos
};