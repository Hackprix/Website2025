import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        custom: "text-black bg-white dark:bg-black dark:hover:bg-white/30 dark:text-white",
        shimmer: "group relative z-0 overflow-hidden dark:bg-black dark:text-white bg-white text-black dark:border-white border-black transform transition-transform duration-300 ease-in-out active:translate-y-px",
        rainbow: "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8",
        icon: "h-10 w-10",
        custom: "h-10 w-30 md:h-14 md:w-60 rounded-2xl px-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    if (variant === "shimmer") {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {/* Spark container */}
          <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
            {/* Spark */}
            <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
              <div className="animate-spin-around absolute -inset-full w-auto rotate-0 
                dark:[background:conic-gradient(from_calc(270deg-(90deg*0.5)),transparent_0,#ffffff_90deg,transparent_90deg)]
                [background:conic-gradient(from_calc(270deg-(90deg*0.5)),transparent_0,#000000_90deg,transparent_90deg)]
                [translate:0_0]" />
            </div>
          </div>
          {props.children}
          
          {/* Highlight - adjusted for both modes */}
          <div className="insert-0 absolute size-full rounded-2xl px-4 py-1.5 text-sm font-medium 
            dark:shadow-[inset_0_-8px_10px_#ffffff1f]
            shadow-[inset_0_-8px_10px_#0000001f]
            transform transition-all duration-300 ease-in-out 
            dark:group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]
            group-hover:shadow-[inset_0_-6px_10px_#0000003f]
            dark:group-active:shadow-[inset_0_-10px_10px_#ffffff3f]
            group-active:shadow-[inset_0_-10px_10px_#0000003f]" />
          
          {/* Backdrop */}
          <div className="absolute -z-20 dark:bg-black bg-white [border-radius:30px] [inset:0.05em]" />
        </Comp>
      );
    }
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };