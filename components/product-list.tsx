import NoResults from "@/components/ui/no-results";
import ProductCard from "./ui/product-card"; 
import { ProductListProps } from "@/utils/types";

const ProductList: React.FC<ProductListProps> = ({ title, items, initialLength, finalLength }) => {
  let displayedItems = items;

  if (initialLength !== undefined && finalLength !== undefined) {
    displayedItems = items.slice(initialLength, finalLength);
  } else if (initialLength !== undefined) {
    displayedItems = items.slice(initialLength);
  }

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-xl sm:text-3xl pb-5">{title}</h3>
      {displayedItems.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-[2rem]">
        {displayedItems.map((item: any) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};


export default ProductList;
