"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

const LenisContext = createContext(null);

export const LenisProvider = ({ children }) => {
  const lenis = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function update(time) {
      lenis.current.raf(time);
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);

    return () => lenis.current.destroy();
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);
