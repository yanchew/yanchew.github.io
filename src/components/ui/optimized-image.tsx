"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          duration-700 ease-in-out
          ${isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"}
          ${className}
        `}
        onLoadingComplete={() => setLoading(false)}
        priority={priority}
        quality={90}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  )
} 