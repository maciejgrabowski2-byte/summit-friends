import * as React from "react";

interface DividerProps {
  className?: string;
}

export function Divider({ className = "" }: DividerProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="h-px w-full bg-border" />
    </div>
  );
}

export default Divider;
