import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";

export default function ProfileCard() {
	return (
		<Card>
			<div className="flex flex-col justify-between items-middle h-full">
				<div className="flex flex-row justify-center items-center text-center font-bold text-3xl"><span className="mr-2">Bem vindo(a)</span> <i className="devicon-bash-plain" style={{marginTop: "7px"}}></i></div>

				<div className="flex flex-col items-center">
					<div
						style={{
							width: "160px",
							height: "160px",
							borderRadius: "50%",
							overflow: "hidden",
							backgroundColor: "blue",
							display: "inline-block",
							verticalAlign: "middle",
						}}
					>
						<img
							src="/images/profile.png"
							className="object-contain"
							style={{ width: "100%", objectFit: "fill" }}
						/>
					</div>

					<div className="flex flex-col justify-between items-center">
						<div className="font-bold text-xl">Elias Sousa Garrido</div>
						<div className="font-medium">Fullstack Developer</div>
					</div>

					<div className="font-bold mt-8">Disponível Para Oportunidades de Trabalho</div>
				</div>

				<div className="flex flex-col items-start space-y-1 p-4">
					
					<Button
						startIcon={<i className="devicon-linkedin-plain text-2xl"></i>}
						variant="link"
					>
						linkedin.com/in/elias-garrido-3609671a2
					</Button>

					<Button
						startIcon={<i className="devicon-github-original text-2xl"></i>}
						variant="link"
					>
						github.com/Mastercliff
					</Button>
				</div>
			</div>
		</Card>
	);
}
