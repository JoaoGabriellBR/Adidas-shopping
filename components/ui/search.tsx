import { SearchIcon } from 'lucide-react';
import { useSearch } from '@/context/search-context';

const SearchInput = () => {

  const { searchQuery, handleSearch } = useSearch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    handleSearch(query);
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-neutral-500" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        className="text-neutral-500 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-black"
        placeholder="Pesquisar..."
      />
    </div>
  );
};

export default SearchInput;
