import { Size } from "@/types";
import sizes from "@/sizes.json";

const getSizes = async (): Promise<Size[]> => {
  return sizes;
};

export default getSizes;
