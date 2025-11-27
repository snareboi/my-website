"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavBar() {
  const path = usePathname();
  if(!path.startsWith("/studio")) {
    return (
      <nav className="border-b sticky top-0 border-gray-800 bg-gray-900 text-gray-100 z-10">
        <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
          <Link href="/" className="font-medium text-lg md:hover:underline">Home</Link>
          <ul className="hidden md:flex items-center justify-end space-x-4 text-sm font-medium">
            <li className="md:hover:underline md:hover:bg-gray-300">
              <a href="/blog">Blog</a>
            </li>
            <li className="md:hover:underline md:hover:bg-gray-300">
              <a href="/photos">Photos</a>
            </li>
          </ul>
        </div>
      </nav>

      // <nav className="border-b sticky top-0 bg-primary-900 text-primary-100 border-primary-800 z-10">
      //   <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
      //     <Link href="/" className="font-medium text-lg md:hover:underline">
      //       My Website
      //     </Link>
      //     <ul className="hidden md:flex items-center justify-end space-x-4 text-sm font-medium">
      //       <li className="md:hover:underline">
      //         <Link href="/blog">Blog</Link>
      //       </li>
      //       <li className="md:hover:underline">
      //         <Link href="/photos">Photos</Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
    )
  }
  
}
