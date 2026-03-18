"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface BlobBackgroundProps {
  className?: string
}

export function BlobBackground({ className }: BlobBackgroundProps) {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"))
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])
  return (
    <div
      className={cn(
        "fixed inset-0 -z-10 overflow-hidden pointer-events-none",
        className,
      )}
    >
      {/* Primary blob */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute -top-20 -right-20 w-80 h-80 bg-linear-to-br ${
          isDark ? "from-blue-500/25 to-transparent" : "from-blue-500/40 to-transparent"
        } rounded-full blur-3xl`}
      />

      {/* Secondary blob */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 100, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className={`absolute top-10 -right-10 w-96 h-96 bg-linear-to-br ${
          isDark ? "from-indigo-500/25 to-transparent" : "from-indigo-500/35 to-transparent"
        } rounded-full blur-3xl`}
      />

      {/* Tertiary blob */}
      <motion.div
        animate={{
          x: [0, 70, -50, 0],
          y: [0, -60, 80, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className={`absolute top-40 -right-32 w-72 h-72 bg-linear-to-br ${
          isDark ? "from-blue-500/20 to-transparent" : "from-blue-500/30 to-transparent"
        } rounded-full blur-3xl`}
      />
    </div>
  )
}
