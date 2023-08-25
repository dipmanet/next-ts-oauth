import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "DipQuiz",
	description: "Answer Quiz Question for amazing rewards",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}