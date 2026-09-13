import * as React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface GradientButtonProps
  extends React.ComponentProps<typeof Button> {
  fromColor?: string
  toColor?: string
}

export function GradientButton({
  fromColor = "#6366f1",
  toColor = "#ec4899",
  className,
  style,
  ...props
}: GradientButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        "border-0 text-white shadow-md transition-opacity hover:opacity-90",
        className
      )}
      style={
        {
          background: `linear-gradient(to right, ${fromColor}, ${toColor})`,
          ...style,
        } as React.CSSProperties
      }
    />
  )
}