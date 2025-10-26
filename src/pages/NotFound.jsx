const NotFound = () => {
  return (
    <div className="">
      <h1>404</h1>
      <p>not found</p>

      <div className="">
        <button
          onClick={() => (window.location.href = "/")}
          className="cursor-pointer whitespace-nowrap text-sm font-normal disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-3 rounded-md gap-1.5 px-5 has-[>svg]:px-3 underline underline-offset-1 text-black hover:text-yellow-500 transition-all duration-300 ease-in-out active:scale-[0.93]"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
