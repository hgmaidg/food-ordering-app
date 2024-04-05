"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default function Header() {
  const session = useSession();
  const status = session.status;
  console.log(session);

  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto">
      <nav className="flex items-center gap-10 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="/">
          PI PIZZA
        </Link>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        {status === "authenticated" && (
          <Link
            href="/login"
            className="bg-primary text-white px-6 py-2 rounded-full"
          >
            Logout
          </Link>
        )}
        {status === "unauthenticated" ? (
          <>
            <Link href="/login">Login</Link>
            <Link
              href="/register"
              className="bg-primary text-white px-6 py-2 rounded-full"
            >
              Register
            </Link>
          </>
        ) : null}
      </nav>
    </header>
  );
}
