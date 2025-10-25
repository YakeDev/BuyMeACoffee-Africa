import { Link } from "react-router-dom";
import DecorativeBar from "../components/DecorativeBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Preview from "/Preview.png";
import { Drama } from "lucide-react";
import about1 from "/About1.png";
import about2 from "/image.png";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Home Page Content Here */}
      <div className="">
        <main className="relative z-0 flex min-h-screen flex-col">
          {/* HERO SECTION */}
          <section>
            <div className="py-30 mt-25 relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-5 px-6">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-md border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent cursor-pointer gap-1 bg-[#202020] text-white hover:bg-[#202020]/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
                Under construction
              </a>

              <h1 className="text-black/75 max-w-lg text-center text-4xl font-bold">
                Bring your ideas to life. Support and collaborate with Africa's
                talent.
              </h1>
              <p className="max-w-lg text-center text-black/60 fontd-medium">
                We are currently developing our app to provide you with the best
                possible experience. It will be available soon!
              </p>

              <div className="flex gap-5">
                <Link
                  to="./register"
                  className='inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-2 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 mt-4 border border-zinc-950/5 bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out active:scale-[0.93]'
                >
                  Get started free
                </Link>
              </div>
            </div>
          </section>

          {/* DECORATIVE BAR */}
          <DecorativeBar />

          {/* PREVIEW INTERFACE */}
          <section>
            <div className="w-full max-w-5xl mx-auto mt-10">
              <div className="rounded-xl p-1 text-sm mt-16 border border-zinc-950/5 bg-zinc-950/5">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl">
                  <span className="size-3 rounded-full bg-red-500"></span>
                  <span className="size-3 rounded-full bg-yellow-400"></span>
                  <span className="size-3 rounded-full bg-green-500"></span>
                </div>
                <img
                  src={Preview}
                  alt="Preview"
                  width={1400}
                  height={900}
                  data-nimg="1"
                  objectfit="cover"
                  className="block mx-auto w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* DECORATIVE BAR */}
          <DecorativeBar />

          {/* ABOUT SECTION */}
          <section>
            <div className="sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[80%] 2xl:w-[50%] mx-auto">
              <div className="">
                <div className="">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <a href="/" className="inline-flex items-center justify-center rounded-md border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent cursor-pointer gap-1 bg-zinc-950/10 text-zinc-600 hover:bg-[#202020]/80">
                      <Drama />
                      <span>how it works</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 mb-10">
                  <h2 className="text-black/75 max-w-3xl text-center text-4xl font-bold">With us, appointment scheduling is easy</h2>
                  <p className="max-w-lg text-center text-black/60 font-medium">
                    Effortless scheduling for business and individuals, powerful
                    solutions for fast-growing modern companies.
                  </p>
                </div>
                <div className="flex justify-center mb-16">
                  <Link
                    href="./register"
                    className='inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-2 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 border border-zinc-950/5 bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out active:scale-[0.93]'
                  >
                    get started free
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="grid gap-5 grid-cols-3">
                  <div className="border border-zinc-950/5 rounded-xl p-5 flex flex-col gap-4 shadow-md">
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <span className="rounded-2xl p-1 bg-zinc-950/5">01</span>
                      </div>
                      <h3 className="text-black/75 text-start text-[18px] font-medium line-clamp-1">Create your creator profile</h3>
                      <p className="max-w-lg text-black/60 font-light text-sm line-clamp-3">
                        Sign up for free and customize your page to showcase your work, your story, and your projects.
                      </p>
                    </div>
                    <div className="">
                      <img src={about2} alt="" width={300} height={100} />
                    </div>
                  </div>

                  <div className="border border-zinc-950/5 rounded-xl p-5 flex flex-col gap-4 shadow-md">
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <span className="rounded-2xl p-1 bg-zinc-950/5">02</span>
                      </div>
                      <h3 className="text-black/75 text-start text-[18px] font-medium line-clamp-1">Share your link with your community</h3>
                      <p className="max-w-lg text-black/60 font-light text-sm line-clamp-3">
                        Copy your unique link and share it on social media, your website, or directly via message.
                      </p>
                    </div>
                    <div className="">
                      <img src={about1} alt="" width={300} height={100} />
                    </div>
                  </div>

                  <div className="border border-zinc-950/5 rounded-xl p-5 flex flex-col gap-4 shadow-md">
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <span className="rounded-2xl p-1 bg-zinc-950/5">03</span>
                      </div>
                      <h3 className="text-black/75 text-start text-[18px] font-medium line-clamp-1">Receive support and grow your ideas</h3>
                      <p className="max-w-lg text-black/60 font-light text-sm line-clamp-3">
                        Every contribution brings you closer to your goal.
Turn your creative energy into real impact thanks to the generosity of your community 💛.
                      </p>
                    </div>
                    <div className="">
                      <img src={about1} alt="" width={300} height={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Home;
