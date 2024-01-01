"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Dialog } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { useSearch } from "@/context/search-context";

const NavbarMobile = ({ routes }: any) => {

  const { handleSearch } = useSearch();
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => {
    handleSearch('');
    setOpen(false);
  }

  return (
    <>
      <Button onClick={onOpen} className="flex items-center rounded-full bg-black px-4 py-2">
        <Menu size={20} color="white" />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto h-full w-full max-w-xs flex flex-col gap-4 overflow-y-auto bg-white py-4 pb-6 shadow-xl">

            <div onClick={onClose} className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} />
            </div>

            {routes.map((route: any) => (
              <Link
                key={route.label}
                href={route.href}
                onClick={onClose}
                className={cn(
                  "text-lg font-medium inline-block text-center transition-colors hover:text-black",
                  route.active ? "text-black" : "text-neutral-500",
                )}
              >
                {route.label}
              </Link>
            ))}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default NavbarMobile;
