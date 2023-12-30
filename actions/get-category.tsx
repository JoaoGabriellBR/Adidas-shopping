import { Category } from "@/utils/types";
import categories from "@/utils/categories.json";

const getCategory = async (id: string): Promise<Category | any> => {
  const categoryId = Number(id);
  const category = categories.find((cat) => cat.id === categoryId);
  return category;
};

export default getCategory;
