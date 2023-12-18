// import { Size } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

// const getSizes = async (): Promise<Size[]> => {
//     const res = await fetch(URL);

//     return res.json();
// }

// export default getSizes

import { Size } from "@/types";
import sizes from "@/sizes.json";

const getSizes = async (): Promise<Size[]> => {
  return sizes;
};

export default getSizes;
