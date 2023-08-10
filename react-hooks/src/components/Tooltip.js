import { useLayoutEffect, useEffect, useRef, useState } from "react";

export const Tooltip = ({ children, targetRect }) => {
  const [height, setHeight] = useState(0);
  const totltipRef = useRef(null);

  // Synchronous (blocks the browser from painting)
  // React guarantees that the code inside useLayoutEffect and any state updates scheduled inside it will be processed before the browser repaints the screen.
  // This lets you render the tooltip, measure it, and re-render the tooltip again without the user noticing the first extra render.
  // In other words, useLayoutEffect blocks the browser from painting.
  useLayoutEffect(() => {
    const rect = totltipRef.current.getBoundingClientRect();
    setHeight(rect.height);
  }, []);


  // Asynchronous
  // If you’re on a slower device, you might notice that sometimes the tooltip “flickers” and you briefly see its initial position before the corrected position.
  // useEffect(() => {
  //   const rect = totltipRef.current.getBoundingClientRect();
  //   setHeight(rect.height);
  // }, []);

  let top = 0;
  let left = 0;

  if (targetRect) {
    left = targetRect.left;
    top = targetRect.top - height;
    if (top < 0) {
      top = targetRect.bottom;
    }
  }

  return (
    <div
      ref={totltipRef}
      style={{
        position: "absolute",
        top,
        left,
        padding: "4px",
        backgroundColor: "black",
        borderRadius: "2px",
        color: "white",
      }}
    >
      {children}
    </div>
  );
};
