

const technologiesInfos: Record<string, {
	color: string,
	icon: string,
	title: string
}> = {
	node: {
		color: "green-500",
		icon: "devicon-nodejs-plain-wordmark colored",
		title: "Node"
	},
	typescript: {
		color: "blue-600",
		icon: "devicon-typescript-plain colored",
		title: "Typescript"
	},
	react: {
		color: "blue-500",
		icon: "devicon-react-original colored",
		title: "React"
	},
	php: {
		color: "purple-500",
		icon: "devicon-php-plain colored",
		title: "PHP"
	},
	laravel: {
		color: "red-500",
		icon: "devicon-laravel-original colored",
		title: "Laravel"
	},
	flutter: {
		color: "blue-500",
		icon: "devicon-flutter-plain colored",
		title: "Flutter"
	},
	python: {
		color: "yellow-500",
		icon: "devicon-python-plain colored",
		title: "Python"
	},
	awss: {
			color: "orange-500",
			icon: "devicon-amazonwebservices-plain-wordmark colored",
			title: "AWS Services"
	},
	redis: {
		color: "red-500",
		icon: "devicon-redis-plain colored",
		title: "Redis"
	},
	postgresql: {
		color: "blue-600",
		icon: "devicon-postgresql-plain colored",
		title: "Postgre SQL"
	},
	nextjs: {
		color: "gray-600",
		icon: "devicon-nextjs-plain",
		title: "Next JS"
	},
	tailwindcss: {
		color: "blue-500",
		icon: "devicon-tailwindcss-original colored",
		title: "Tailwind CSS"
	},
	javascript: {
		icon: "devicon-javascript-plain colored",
		color: "yellow-500",
		title: "Javascript"
	},
	html: {
		icon: "devicon-html5-plain-wordmark colored",
		color: "orange-500",
		title: "HTML"
	},
	css: {
		icon: "devicon-css3-plain-wordmark colored",
		color: "blue-500",
		title: "CSS"
	},
	dart: {
		color: "blue-500",
		icon: "devicon-dart-plain colored",
		title: "Dart"
	},
	mongodb: {
		color: "green-500",
		icon: "devicon-mongodb-plain-wordmark colored",
		title: "Mongo DB"
	},
	docker: {
		color: "blue-500",
		icon: "devicon-docker-plain colored",
		title: "Docker"
	},
	mysql: {
		color: "blue-500",
		icon: "devicon-mysql-original colored",
		title: "MySql"
	},
	mui: {
		color: "blue-500",
		icon: "devicon-materialui-plain colored",
		title: "Material UI"
	},
	sass: {
		icon: 	"devicon-sass-original colored",
		color: "pink-500",
		title: "Sass"
	},
	kafka: {
		color: "gray-600",
		icon: "devicon-apachekafka-original-wordmark",
		title: "Kafka"
	},
	vue: {
		color: "green-500",
		icon: "devicon-vuejs-plain colored",
		title: "Vue JS"
	},
	sqlite: {
		color: "blue-600",
		icon: "devicon-sqlite-plain colored",
		title: "SQLite"
	},
	git: {
		color: "orange-500",
		icon: "devicon-git-plain colored",
		title: "Git"
	},
	nuxt: {
		color: "green-500",
		icon: "devicon-nuxtjs-plain colored",
		title: "Nuxt JS"
	},
	vuetify: {
		color: "blue-500",
		icon: "devicon-vuetify-plain colored",
		title: "Vuetify"
	}
}

export type TechnologiesNames = keyof typeof technologiesInfos


export {
	technologiesInfos
};