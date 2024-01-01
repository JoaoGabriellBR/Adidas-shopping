"use client"
import { useSearch } from '@/context/search-context';
import Header from './header';
import ProductCard from './ui/product-card';
import NoResults from './ui/no-results';

const CustomLayout = ({ children }: any) => {
    const { searchQuery, searchResults } = useSearch();

    return (
        <>
            <Header />
            {searchQuery && !searchResults.length && <NoResults />}
            {searchQuery ? (
                <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {searchResults.map((product: any) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            ) : (
                <div className="container mx-auto px-4">
                    {children}
                </div>
            )}
        </>
    );
};

export default CustomLayout;
