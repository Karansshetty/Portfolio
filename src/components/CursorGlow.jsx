import { useEffect, useRef } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

const isCoarsePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(pointer: coarse)")?.matches;

/**
 * Subtle cursor-follow glow overlay.
 * - Uses RAF easing (delayed movement)
 * - Updates CSS variables on the overlay element (GPU-friendly via transform)
 * - Disables itself for reduced-motion and coarse pointers
 */
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion() || isCoarsePointer()) return;

    let rafId = 0;
    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.25;
    let currentX = targetX;
    let currentY = targetY;

    const setVars = (x, y) => {
      el.style.setProperty("--cursor-glow-x", `${x}px`);
      el.style.setProperty("--cursor-glow-y", `${y}px`);
    };

    setVars(currentX, currentY);

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const animate = () => {
      const ease = 0.08; // smaller = more delayed
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      setVars(currentX, currentY);
      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
