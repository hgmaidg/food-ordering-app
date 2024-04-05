"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);
    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
    setLoginInProgress(false);
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl">Login</h1>
      <form
        className="block max-w-sm mx-auto mt-6 "
        onSubmit={handleFormSubmit}
      >
        <input
          disabled={loginInProgress}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          disabled={loginInProgress}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="mt-8"
          type="submit"
          onClick={handleFormSubmit}
          disabled={loginInProgress}
        >
          Login
        </button>
        <div className="text-center my-4 text-gray-500">
          {" "}
          or login with provider
        </div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className=" px-6 py-2 rounded-lg flex items-center justify-center gap-2"
        >
          <Image src="/google.png" width={24} height={24} alt="google" />
          Login with Google
        </button>
      </form>
    </section>
  );
}
