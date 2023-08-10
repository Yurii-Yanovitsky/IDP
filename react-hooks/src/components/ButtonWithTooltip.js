import { useRef, useState } from "react";
import { Tooltip } from "./Tooltip";

export const ButtonWithTooltip = ({ children, tooltipMessage }) => {
  const buttonRef = useRef(null);
  const [targetRect, setTargetRect] = useState();

  const handlePointEvent = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setTargetRect({
      top: rect.top,
      left: rect.left,
      right: rect.right,
      bottom: rect.bottom,
    });
  };

  const handePointerLeaveEvent = () => {
    setTargetRect(null);
  };

  return (
    <div>
      <button
        ref={buttonRef}
        onPointerEnter={handlePointEvent}
        onPointerLeave={handePointerLeaveEvent}
      >
        {children}
      </button>
      {targetRect && (
        <Tooltip targetRect={targetRect}>{tooltipMessage}</Tooltip>
      )}
    </div>
  );
};
