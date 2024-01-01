import Link from "next/link";
import { cn } from "@/lib/cn";
import { useSearch } from "@/context/search-context";

export default function Navbar({ routes }: any) {

  const { handleSearch } = useSearch();
  const handleClick = () => handleSearch('');

  return (
    <div className="flex flex-row gap-4">
      {routes.map((route: any) => (
        <Link
          key={route.label}
          href={route.href}
          onClick={handleClick}
          className={cn(
            "text-sm font-medium inline-block text-center transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500",
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  )
}
