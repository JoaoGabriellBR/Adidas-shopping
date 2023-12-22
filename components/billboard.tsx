import { Billboard as BillboardType } from "@/types";
import camisa from '@/assets/running.png'
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

export const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1.4] overflow-hidden bg-cover"
      >
         <Image src={data.imageUrl} alt="Billboard Image" layout="fill" objectFit="cover" />
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-white text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};
