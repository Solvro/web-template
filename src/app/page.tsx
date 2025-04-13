import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
      <Image
        className="px-4"
        src="/logo.svg"
        alt="Solvro Logo"
        style={{ objectFit: "cover" }}
        width={400}
        height={400}
        priority
      />
      <h1 className="px-4 text-center font-sans text-xl text-white md:text-4xl">
        Twoja aplikacja NEXT.JS się odpala
      </h1>
      <div className="flex flex-row items-center justify-center gap-4 pt-10">
        <Button asChild>
          <Link href="https://docs.solvro.pl/">Docs Solvro</Link>
        </Button>
        <Button asChild>
          <Link href="https://github.com/orgs/Solvro/teams/kn-solvro">
            <Image
              src="/github-mark.svg"
              alt="Github"
              style={{ objectFit: "cover" }}
              width={20}
              height={20}
            />
            Github
          </Link>
        </Button>
      </div>
      <footer className="absolute right-0 bottom-0 left-0 p-4 text-center text-white">
        <p className="text-sm">
          Made with ❤️ by{" "}
          <Link href="https://solvro.pwr.edu.pl/pl/"> Solvro </Link>
        </p>
      </footer>
    </div>
  );
}
