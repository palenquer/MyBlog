import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-opacity-10 border-lighter pb-4">
      <Link href="/">
        <a className="text-secondary text-5xl font-lobster hover:opacity-80 transition">
          MyBlog
        </a>
      </Link>

      <nav className="space-x-8 list-none flex">
        <Link href="/">
          <a className="hover:text-secondary font-bold transition w-16 flex items-center justify-center">Home</a>
        </Link>

        <Link href="/">
          <a className="hover:text-secondary font-bold transition w-16 flex items-center justify-center">
            Posts
          </a>
        </Link>

        <Link href="/">
          <a className="hover:text-secondary font-bold transition w-16 flex items-center justify-center">About</a>
        </Link>

        <Link href="/">
          <a>
            <button className="border-2 border-secondary hover:bg-secondary py-2 px-8 font-bold rounded-3xl hover:text-lighter transition">
              Sign in
            </button>
          </a>
        </Link>
      </nav>
    </header>
  );
}
