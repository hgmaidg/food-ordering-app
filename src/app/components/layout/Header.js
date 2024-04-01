import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto">
      <Link className="text-primary font-semibold text-2xl" href="/">
        PI PIZZA
      </Link>
      <nav className="flex items-center gap-10 text-gray-500 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link
          href="/login"
          className="bg-primary text-white px-6 py-2 rounded-full"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
