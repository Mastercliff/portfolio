import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";

export default function ProfileCard() {
	return (
		<Card>
			<div className="flex flex-col justify-between items-middle h-full">
				<div className="text-center font-bold text-2xl">Bem vindo</div>

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
				</div>

				<div className="flex flex-col items-start space-y-1">
					<Button
						startIcon={<i className="devicon-linkedin-plain text-2xl"></i>}
						variant="link"
					>
						linkedin.com/in/elias-garrido-3609671a2
					</Button>

					<Button
						startIcon={<i className="devicon-github-original-wordmark text-2xl"></i>}
						variant="link"
					>
						github.com/Mastercliff
					</Button>
				</div>
			</div>
		</Card>
	);
}
