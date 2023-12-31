"use client"
import { createContext, useContext, useState } from 'react';
import products from "@/utils/products.json";
import { Product } from "@/utils/types";

interface SearchContextProps {
    searchQuery: string | any;
    searchResults: Product[] | any;
    handleSearch: (query: string) => void;
}

const SearchContext = createContext<SearchContextProps | any>(undefined);

export const SearchProvider = ({ children }: any) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Product[] | any>([]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);

        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        const searchWords = query.toLowerCase().split(/\s+/);

        const filteredProducts = products.filter((product) =>
            searchWords.every((word) =>
                product.name.toLowerCase().includes(word)
            )
        );

        setSearchResults(filteredProducts);
    };

    return (
        <SearchContext.Provider value={{ searchQuery, searchResults, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch deve ser usado dentro de um SearchProvider.');
    }
    return context;
};