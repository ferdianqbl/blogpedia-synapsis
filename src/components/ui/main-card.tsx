import * as React from "react";

import { cn } from "@/lib/utils";

const MainCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-md border bg-card text-card-foreground shadow p-4",
      className
    )}
    {...props}
  >
    {children}
  </div>
));

export default MainCard;
