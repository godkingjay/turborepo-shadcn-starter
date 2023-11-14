import { Github } from "lucide-react";
import Link from "next/link";
import {
	Card,
	cn,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	Button,
} from "ui";

export default function Page(): JSX.Element {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex flex-col gap-y-2">
				<Card className={cn("w-[380px]")}>
					<CardHeader className="text-center">
						<CardTitle>Documentation</CardTitle>
						<CardDescription>NextJS Application</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<Link
							href="https://github.com/godkingjay/turborepo-shadcn-starter"
							target="_blank"
						>
							<Button className="w-full">
								<Github className="mr-2 h-4 w-4" /> GitHub
							</Button>
						</Link>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
