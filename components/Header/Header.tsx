import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900">
      <nav className="container mx-auto flex h-20 items-center px-2">
        <Link href={"/"}>
          <img src="/images/logo.png" alt="Chainsaw Man Logo" width={256} />
          <span className="sr-only">Go to Home</span>
        </Link>
        <ul>
          <li>
            <Link href={"/characters"}>Characters</Link>
          </li>
          {/* <li>
            <Link href={""}></Link>
          </li>
          <li>
            <Link href={""}></Link>
          </li>
          <li>
            <Link href={""}></Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
