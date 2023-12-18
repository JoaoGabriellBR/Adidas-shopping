// import { Color } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

// const getColors = async (): Promise<Color[]> => {
//     const res = await fetch(URL);

//     return res.json();
// }

// export default getColors

import { Color } from "@/types";
import colors from "@/colors.json";

const getColors = async (): Promise<Color[]> => {
  return colors;
};

export default getColors;
