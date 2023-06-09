import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900">
      <nav className="container mx-auto flex h-20 flex-wrap items-center justify-between px-2">
        <Link href={"/"}>
          <ExportedImage
            src="/images/logo.png"
            alt="Chainsaw Man Logo"
            width={256}
            height={32}
          />
          <span className="sr-only">Go to Home</span>
        </Link>
        <ul>
          <li>
            <Link href={"/characters"} className="font-bold hover:underline">
              CHARACTERS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
