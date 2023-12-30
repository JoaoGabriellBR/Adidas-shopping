import { Color } from "@/utils/types";
import colors from "@/utils/colors.json";

const getColors = async (): Promise<Color[]> => {
  return colors;
};

export default getColors;
