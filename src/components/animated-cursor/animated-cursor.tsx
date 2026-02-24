"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let posX = 0
    let posY = 0

    // Movimento suave (lerp)
    const speed = 0.15

    const animate = () => {
      posX += (mouseX - posX) * speed
      posY += (mouseY - posY) * speed

      gsap.set(cursor, {
        x: posX,
        y: posY
      })

      requestAnimationFrame(animate)
    }

    animate()

    const moveHandler = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", moveHandler)

    // Hover detect
    const addHover = () => {
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: "power3.out"
      })
    }

    const removeHover = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out"
      })
    }

    const hoverables = document.querySelectorAll("a, button, [data-cursor]")

    hoverables.forEach(el => {
      el.addEventListener("mouseenter", addHover)
      el.addEventListener("mouseleave", removeHover)
    })

    return () => {
      window.removeEventListener("mousemove", moveHandler)
      hoverables.forEach(el => {
        el.removeEventListener("mouseenter", addHover)
        el.removeEventListener("mouseleave", removeHover)
      })
    }
  }, [])

  return (
  <div
    ref={cursorRef}
    className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center"
    style={{
      width: "24px",
      height: "24px",
      transform: "translate(-50%, -50%)"
    }}
  >
    {/* Borda fina */}
    <div
      style={{
        position: "absolute",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        border: "1px solid #00D1FF"
      }}
    />

  </div>
  )
}