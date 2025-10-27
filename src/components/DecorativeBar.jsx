import React from "react";

const DecorativeBar = () => {
  return (
    <div className="relative mx-auto flex h-px w-full max-w-lg items-center justify-center gap-2 bg-zinc-950/5">
      {/* Left decorative dot */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-[1px] bg-zinc-100 border border-zinc-950/5 z-50"></div>

      {/* Right decorative dot */}
      <div className="absolute -bottom-[5px] -right-[5px] w-[10px] h-[10px] rounded-[1px] bg-zinc-100 border border-zinc-950/5 z-50"></div>
    </div>
  );
};

export default DecorativeBar;
