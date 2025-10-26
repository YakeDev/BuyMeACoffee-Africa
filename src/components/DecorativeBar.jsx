const DecorativeBar = () => {
  return (
    <div>
      <div className="bg-zinc-950/5 relative mx-auto flex h-px w-full max-w-lg items-center justify-center gap-2">
        <div className="bg-zinc-950/5 relative mx-auto flex h-px w-full max-w-lg items-center justify-center gap-2">
          <div className="rounded-[1px] bg-zinc-100 border border-zinc-950/5 absolute z-50 top-0 left-0 -translate-x-1/2 -translate-y-1/2 size-[10px]"></div>
          <div className="rounded-[1px] bg-zinc-100 border border-zinc-950/5 absolute z-50 -bottom-[5px] -right-[5px] size-[10px]"></div>
        </div>
      </div>
    </div>
  );
};

export default DecorativeBar;
