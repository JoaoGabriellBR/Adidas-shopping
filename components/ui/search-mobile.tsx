"use client";

import { useState } from "react";
import { useSearch } from "@/context/search-context";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Dialog } from "@headlessui/react";
import { X, SearchIcon } from "lucide-react";

export default function SearchMobile() {

    const [open, setOpen] = useState(false);
    const { searchQuery, handleSearch } = useSearch();

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        handleSearch(query);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch(searchQuery);
            onClose();
        }
    };

    return (
      <>
        <Button onClick={onOpen} className="px-4 m-0 bg-transparent">
          <SearchIcon size={22} color="black" />
        </Button>

        <Dialog
          open={open}
          as="div"
          className="w-screen h-screen fixed inset-0 z-40 lg:hidden"
          onClose={onClose}
        >
          <div className="w-screen h-screen fixed inset-0 bg-black bg-opacity-25" />

          <Dialog.Panel className="w-screen h-screen fixed inset-0 z-50 flex justify-end bg-white">
            <div className="w-screen h-screen flex flex-col gap-4 overflow-y-auto py-4 pb-6 shadow-xl">
              <div
                onClick={onClose}
                className="flex items-center justify-end px-4"
              >
                <IconButton icon={<X size={15} />} />
              </div>

              <div className="w-screen relative flex justify-center">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-neutral-500" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className="text-neutral-500 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-black"
                    placeholder="Pesquisar..."
                  />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </>
    );
};
