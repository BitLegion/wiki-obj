import * as React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "~/lib/utils";

// Define the Card component with MotionProps and HTML div attributes
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & MotionProps & { isSelected?: boolean; isAnySelected?: boolean }
>(({ className, isSelected, isAnySelected, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      isSelected ? "z-10" : "z-0",
      className
    )}
    layout
    animate={{
      scale: isSelected ? 1.05 : 1,
      opacity: isAnySelected ? (isSelected ? 1 : 0.5) : 1,
      filter: isAnySelected ? (isSelected ? "blur(0px)" : "blur(2px)") : "blur(0px)",
    }}
    transition={{ duration: 0.3 }}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };