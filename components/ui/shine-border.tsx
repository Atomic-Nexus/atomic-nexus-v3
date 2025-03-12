"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderRadius?: string
  containerClassName?: string
  wrapperClassName?: string
  className?: string
  backgroundClassName?: string
  children: React.ReactNode
  as?: React.ElementType
  size?: "sm" | "md" | "lg" | "full"
  position?: "top" | "bottom" | "left" | "right" | "all"
  colors?: string[]
}

export const ShineBorder = React.forwardRef<HTMLDivElement, ShineBorderProps>(
  (
    {
      borderRadius = "0.5rem",
      containerClassName,
      wrapperClassName,
      className,
      backgroundClassName,
      children,
      as: Component = "div",
      size = "full",
      position = "all",
      colors = ["#ffb800", "#ffb800"],
      ...props
    },
    ref,
  ) => {
    const borderSize = {
      sm: "2px",
      md: "4px",
      lg: "6px",
      full: "100%",
    }

    // For a single color, we'll create a shimmer effect with opacity changes
    const colorWithOpacity = (color: string) => {
      return [
        `${color}20`, // 12.5% opacity
        `${color}40`, // 25% opacity
        `${color}80`, // 50% opacity
        `${color}`, // 100% opacity
        `${color}80`, // 50% opacity
        `${color}40`, // 25% opacity
        `${color}20`, // 12.5% opacity
      ]
    }

    // Use the first color if only one is provided
    const gradientColors =
      colors.length === 1 ? colorWithOpacity(colors[0]) : colors.length === 2 ? colorWithOpacity(colors[0]) : colors

    const positionMap = {
      top: {
        background: `linear-gradient(90deg, ${gradientColors.join(", ")})`,
        backgroundSize: "200% 200%",
        backgroundPosition: "0% 0%",
        height: size === "full" ? "100%" : borderSize[size],
        width: "100%",
        top: 0,
        left: 0,
      },
      bottom: {
        background: `linear-gradient(90deg, ${gradientColors.join(", ")})`,
        backgroundSize: "200% 200%",
        backgroundPosition: "0% 0%",
        height: size === "full" ? "100%" : borderSize[size],
        width: "100%",
        bottom: 0,
        left: 0,
      },
      left: {
        background: `linear-gradient(180deg, ${gradientColors.join(", ")})`,
        backgroundSize: "200% 200%",
        backgroundPosition: "0% 0%",
        width: size === "full" ? "100%" : borderSize[size],
        height: "100%",
        left: 0,
        top: 0,
      },
      right: {
        background: `linear-gradient(180deg, ${gradientColors.join(", ")})`,
        backgroundSize: "200% 200%",
        backgroundPosition: "0% 0%",
        width: size === "full" ? "100%" : borderSize[size],
        height: "100%",
        right: 0,
        top: 0,
      },
      all: {
        background: `linear-gradient(var(--shine-angle, 45deg), ${gradientColors.join(", ")})`,
        backgroundSize: "200% 200%",
        backgroundPosition: "0% 0%",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
      },
    }

    return (
      <div
        ref={ref}
        className={cn("relative p-[1px] overflow-hidden group", containerClassName)}
        style={{
          borderRadius,
        }}
        {...props}
      >
        <div
          className={cn("absolute inset-0 z-[1] animate-[shine_4s_ease_infinite]", backgroundClassName)}
          style={positionMap[position]}
        />
        <Component
          className={cn("relative z-[2] w-full h-full flex items-center justify-center", wrapperClassName)}
          style={{
            borderRadius: `calc(${borderRadius} - 1px)`,
          }}
        >
          <div className={cn("relative z-[2]", className)}>{children}</div>
        </Component>
      </div>
    )
  },
)

ShineBorder.displayName = "ShineBorder"

