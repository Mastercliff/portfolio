import Card from "@/components/shared/Card";
import Chip from "@/components/shared/Chip";
import Image from "@/components/shared/Image";

export default function ProfileCard() {
	return (
		<Card customClass="shadow-xl">
			<div className="flex flex-col justify-between items-middle w-full">
			<div className="flex flex-row items-center justify-center mt-4 h-[250px]">
				<div
					className=""
				>
					<Image
						width="250px"
						height="250px"
						imageSrc="/images/profile.png"
						fit="fill"
					/>
				</div>

				<div className="flex flex-col justify-between items-start ml-6 text-white h-full pb-2">
					<div>
					<div className="font-bold text-xl">Elias Sousa Garrido</div>
					<div className="font-medium text-gray-400">Fullstack Developer</div>
					</div>

					<div className="w-[600px]">
						Olá, sou <span className="text-green-400 font-medium">Desenvolvedor Fullstack Pleno</span>, possuo mais de <span className="text-green-400 font-medium">4 anos</span> de experiência comprovada,
						sou autoditada e apaixonado pela área de desenvolvimento de software. Seria uma honra
						fazer parte do planejamento, criação e manutenção das suas aplicações.
					</div>

					<div className="flex flex-row items-center font-semibold mt-4"><div className="w-[8px] h-[8px] bg-green-500 rounded-full mr-2"></div>
						<Chip
							color="success"
							title="Disponível Para Oportunidades de Trabalho"
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-row justify-center items-center mt-12 mb-2 text-white h-full pb-2 space-x-2">
					<Chip
						color="success"
						title="Node"
						icon={<i className="devicon-nodejs-plain-wordmark colored"></i>}
					/>

					<Chip
						color="custom"
						customColor="bg-blue-600/10 text-blue-600"
						title="Typescript"
						icon={<i className="devicon-typescript-plain colored"></i>}
					/>

					<Chip
						color="info"
						title="React"
						icon={<i className="devicon-react-original colored"></i>}
					/>

					<Chip
						color="custom"
						customColor="bg-purple-500/10 text-purple-500"
						title="PHP"
						icon={<i className="devicon-php-plain colored"></i>}
					/>

					<Chip
						color="custom"
						customColor="bg-red-500/10 text-red-500"
						title="Laravel"
						icon={<i className="devicon-laravel-original colored"></i>}
					/>

					<Chip
						color="info"
						title="Flutter"
						icon={<i className="devicon-flutter-plain colored"></i>}
					/>

					<Chip
						color="custom"
						customColor="bg-yellow-500/10 text-yellow-500"
						title="Python"
						icon={<i className="devicon-python-plain colored"></i>}
					/>

					<Chip
						color="custom"
						customColor="bg-orange-500/10 text-orange-500"
						title="AWS Services"
						icon={<i className="devicon-amazonwebservices-plain-wordmark colored"></i>}
					/>
			</div>
		</div>
		</Card>
	);
}
