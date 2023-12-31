import { useState } from 'react';
import { SearchIcon } from 'lucide-react';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: any) => {
    setSearchQuery(event.target.value);
    // Implement your search logic here
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-neutral-500" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        className="text-neutral-500 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Pesquisar..."
      />
    </div>
  );
};

export default SearchInput;
