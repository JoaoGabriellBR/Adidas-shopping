import { Size } from "@/utils/types";
import sizes from "@/utils/sizes.json"

const getSizes = async (): Promise<Size[]> => {
  return sizes;
};

export default getSizes;
