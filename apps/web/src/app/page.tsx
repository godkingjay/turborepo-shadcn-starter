import { Button } from "ui";

export default function Page(): JSX.Element {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex flex-col gap-y-2">
				<Button>
					Web Application
				</Button>
			</div>
		</main>
	);
}
