import { GithubIcon } from "lucide-react";
import Link from "next/link";
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	cn,
} from "ui";

export default function Page(): JSX.Element {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex flex-col gap-y-2">
				<Card className={cn("w-[380px]")}>
					<CardHeader className="text-center">
						<CardTitle>Web Application</CardTitle>
						<CardDescription>NextJS Application</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<Link
							href="https://github.com/godkingjay/turborepo-shadcn-starter"
							target="_blank"
						>
							<Button className="w-full">
								<GithubIcon className="mr-2 h-4 w-4" /> GitHub
							</Button>
						</Link>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
