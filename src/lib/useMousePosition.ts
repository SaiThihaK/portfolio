import { useState, useEffect } from "react";

// Define a type for the state
type MousePosition = {
  x: number;
  y: number;
};

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // Ensure window is defined (i.e., the code is running in the browser)
    if (typeof window === "undefined") {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
