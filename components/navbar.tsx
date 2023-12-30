import Link from "next/link";
import { cn } from "@/lib/cn";

export default function Navbar({ routes }: any) {
  return (
    <div className="flex flex-row gap-4">
      {routes.map((route: any) => (
        <Link
          key={route.label}
          href={route.href}
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
