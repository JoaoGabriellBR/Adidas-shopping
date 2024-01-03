"use client"
import { useSearch } from '@/context/search-context';
import Header from './header';
import ProductCard from './ui/product-card';
import NoResults from './ui/no-results';
import Container from './ui/container';

const CustomLayout = ({ children }: any) => {
    const { searchQuery, searchResults } = useSearch();

    return (
      <>
        <Header />
        {searchQuery && !searchResults.length && <NoResults />}
        {searchQuery ? (
          <Container>
            <div className="my-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-[2rem]">
              {searchResults.map((product: any) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
          </Container>
        ) : (
          children
        )}
      </>
    );
};

export default CustomLayout;
