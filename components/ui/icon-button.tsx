import { cn } from "@/lib/cn";
import { IconButtonProps } from "@/utils/types";

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition-none",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
