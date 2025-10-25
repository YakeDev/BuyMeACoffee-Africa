import { Link } from "react-router-dom";
import Logo from "/logo-v5.webp";

const Navbar = () => {
  return (
    <header className="sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[80%] 2xl:w-[55%] mx-auto fixed left-0 top-0 right-0 z-50">
      <nav className="flex items-center justify-between py-2 border border-zinc-950/5 bg-zinc-950/2 backdrop-blur-md rounded-2xl px-3 mt-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="">
            <img src={Logo} alt="" width={45} /></span>
            <div className="font-black text-[20px]">
              <span>BuyMeA</span>
              <span className="text-yellow-500">Coffee</span>
            </div>
          </div>
        </Link>

        <div className="">
          <ul>
            <li>
              <Link
                href="./Register"
                className='inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-2 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 border border-zinc-950/5 bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out active:scale-[0.93]'
              >
                got to app
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
