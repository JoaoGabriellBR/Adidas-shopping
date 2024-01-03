import Link from "next/link";
import { cn } from "@/lib/cn";
import { useSearch } from "@/context/search-context";
import { useState } from "react";

export default function Navbar({ routes }: any) {
  const { handleSearch } = useSearch();
  const handleClick = () => handleSearch("");
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="flex flex-row gap-4">
      {routes.map((route: any) => (
        <Link
          key={route.label}
          href={route.href}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(route.label)}
          onMouseLeave={() => setIsHovered(null)}
          className={cn(
            "text-sm font-medium inline-block text-center transition-colors hover:text-black",
            route.active
              ? "text-black underline underline-offset-8"
              : "text-neutral-500",
            isHovered === route.label && "underline underline-offset-8"
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
}
