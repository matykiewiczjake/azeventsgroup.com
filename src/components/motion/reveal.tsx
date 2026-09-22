"use client";

import { motion, type Variants } from "framer-motion";
import { useSyncExternalStore, type ReactNode } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * useSyncExternalStore lets React reconcile the server snapshot (always
 * "not reduced") against the real client preference without a hydration
 * mismatch — React re-syncs automatically after hydration, unlike a
 * useState+useEffect mount-gate.
 */
function useSafeReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Scroll-triggered fade/rise-in for lower-page sections. Fires once, in view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: RevealProps) {
  const shouldReduceMotion = useSafeReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      data-motion-reveal
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

type HeroRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Page-load reveal for hero content — animates on mount, not on scroll. */
export function HeroReveal({
  children,
  className,
  delay = 0,
}: HeroRevealProps) {
  const shouldReduceMotion = useSafeReducedMotion();

  return (
    <motion.div
      data-motion-reveal
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
