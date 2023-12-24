import { Color } from "@/types";
import colors from "@/colors.json";

const getColors = async (): Promise<Color[]> => {
  return colors;
};

export default getColors;
