"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
  sizes?: string
  objectFit?: "contain" | "cover" | "fill"
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 90,
  sizes = "100vw",
  objectFit = "cover",
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-muted",
          className
        )}
        style={{ width, height }}
      >
        <span className="text-sm text-muted-foreground">
          Bild konnte nicht geladen werden
        </span>
      </div>
    )
  }

  return (
    <div className={cn("overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        sizes={sizes}
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0",
          objectFit === "contain" && "object-contain",
          objectFit === "cover" && "object-cover",
          objectFit === "fill" && "object-fill"
        )}
        onLoadingComplete={() => setLoading(false)}
        onError={() => setHasError(true)}
        loading={priority ? "eager" : "lazy"}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      )}
    </div>
  )
} 