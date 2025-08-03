"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import menuImage from "./public/meny.png"
import malvina from "./public/Malvina.png"
import pedernera from "./public/Pedernera.png"
import tango from "./public/Tango.png"
import sunnyCocktail from "./public/Sunny Cocktail.png"

const cocktails = [
  {
    id: 1,
    name: "Menú General",
    image: menuImage,
    type: "overview",
  },
  {
    id: 2,
    name: "Malvina",
    image: malvina,
    type: "cocktail",
  },
  {
    id: 3,
    name: "Tango",
    image: tango,
    type: "cocktail",
  },
  {
    id: 4,
    name: "Pedernera",
    image: pedernera,
    type: "cocktail",
  },
  {
    id: 5,
    name: "Sunny Cocktail",
    image: sunnyCocktail,
    type: "cocktail",
  },
]

export default function CocktailMenu() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < cocktails.length - 1) {
      nextSlide()
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide()
    }
  }

  const nextSlide = () => {
    if (currentIndex < cocktails.length - 1 && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goToSlide = (index: number) => {
    if (index !== currentIndex && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex(index)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [currentIndex])

  // Auto-advance slides every 10 seconds (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < cocktails.length - 1) {
        nextSlide()
      } else {
        setCurrentIndex(0)
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#fcf4e4", overflow: "hidden" }}>
      {/* Main Content - Full Screen */}
      <main className="flex-1 relative">
        <div
          ref={containerRef}
          className="relative w-full h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card Container - Full Screen */}
          <div className="relative overflow-hidden w-full h-screen">
            <div
              className="flex transition-transform duration-300 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cocktails.map((cocktail, index) => (
                <div key={cocktail.id} className="w-full h-full flex-shrink-0">
                  <div className="w-full h-full relative">
                    <Image
                      src={cocktail.image || "/placeholder.svg"}
                      alt={cocktail.name}
                      fill
                      className="object-contain"
                      style={{ backgroundColor: "#fcf4e4" }}
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Positioned for full screen */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg z-10"
            onClick={prevSlide}
            disabled={currentIndex === 0 || isTransitioning}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg z-10"
            onClick={nextSlide}
            disabled={currentIndex === cocktails.length - 1 || isTransitioning}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator - Positioned at bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {cocktails.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-200 ${
                  index === currentIndex ? "text-white scale-125" : "text-white/50 hover:text-white/80"
                }`}
                disabled={isTransitioning}
              >
                <Circle className={`h-3 w-3 ${index === currentIndex ? "fill-current" : ""}`} />
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
