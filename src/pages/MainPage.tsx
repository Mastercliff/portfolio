import Profile from "@/components/layout/Profile";

export default function MainPage() {
	return <main className="flex flex-row p-4 backdrop-blur-md bg-blend-multiply" style={{
		height: "100vh"
	}}>
		<div className="h-full">
			<Profile/>
		</div>
		<div>

		</div>
	</main>
}