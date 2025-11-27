"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavBar() {
  const path = usePathname();
  if(!path.startsWith("/studio")) {
    return (
      <nav className="top-0 sticky bg-gray-900 text-gray-100 z-10">
        <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between border-b border-gray-800">
          <Link href="/" className="font-medium text-lg md:hover:underline">Home</Link>
          <ul className="hidden md:flex items-center justify-end spaced-x-4 text-sm font-medium">
            <li className="md:hover:underline md:hover:bg-gray-300">
              <a href="/blog">Blog</a>
            </li>
            <li className="md:hover:underline">
              <a href="/photos">Photos</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  
}
