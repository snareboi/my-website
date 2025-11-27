"use client"

import { usePathname } from "next/navigation";


export default function Footer() {
  const path = usePathname();
  if(!path.startsWith("/studio")) {
    return (
      <footer className="border-t text-center p-4 text-sm font-semibold bg-primary-100 text-primary-900 border-primary-200 bg-blue-800">
        <p>Me &copy; {new Date().getFullYear()}</p>
      </footer>
    );
  }
  
}