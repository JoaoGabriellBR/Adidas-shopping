import { useWishList } from "@/hooks/createCustomStore";
import { Heart } from "lucide-react";
import IconSchema from "./icon-schema";

export default function HeartIcon() {
  const wishList = useWishList();
  const getCount = () => wishList.items.length;

  return <IconSchema icon={Heart} route="/wishlist" getCount={getCount} />;
}
