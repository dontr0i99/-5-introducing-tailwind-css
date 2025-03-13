"use client";
import { usePathname } from "next/navigation";

type NavItemProps = {
  title: string;
  url: string;
  isSelected: boolean;
};

function NavItem({ title, url, isSelected }: NavItemProps) {
  return (
    <li>
      <div className={`mx-2 rounded-full transition-transform transform hover:scale-105 ${isSelected ? "bg-white text-indigo-600" : "text-white"}`}>
        <a className={`block px-4 py-2`}  href={url}>
          {title}
        </a>
      </div>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-center mx-auto max-w-screen h-16 pt-6 bg-gradient-to-r from-blue-500 to-indigo-600">
      <nav>
        <ul className="flex rounded-full bg-indigo-600/90 px-6 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-800/5 ring-1 ring-indigo-900/10 backdrop-blur-lg">
          <NavItem title="Tentang Saya" url="/" isSelected={pathname === "/"} />
          <NavItem
            title="Proyek"
            url="/projects"
            isSelected={pathname === "/projects"}
          />
          <NavItem
            title="Esai"
            url="/essays"
            isSelected={pathname === "/essays"}
          />
        </ul>
      </nav>
    </div>
  );
}
