
"use client";

import { forwardRef } from "react";

const TransitionOverlay = forwardRef<HTMLDivElement>(
  function TransitionOverlay(_, ref) {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed inset-0 z-[100]
          opacity-0
        "
        style={{
          backgroundColor: "var(--theme-background)",
        }}
      />
    );
  }
);

export default TransitionOverlay;
