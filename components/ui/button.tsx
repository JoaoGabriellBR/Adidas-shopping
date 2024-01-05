import { cn } from "@/lib/cn";
import { forwardRef } from "react";
import { ButtonProps } from "@/utils/types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", outline, ...props }, ref) => {
    return (
      <button
        className={cn(
          `
        w-auto
        h-[2.7rem]
        flex
        flex-row
        justify-center
        items-center
        rounded-full
        bg-black
        border-transparent
        px-5
        py-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-white
        font-normal
        hover:opacity-75
        transition
    `,
        outline && "bg-transparent border-[1px] border-black text-black",
        className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
