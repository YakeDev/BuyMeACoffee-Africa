import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DecorativeBar from "../components/DecorativeBar";

export default function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        setLoading(true);
        // Using a CORS proxy for demonstration - in production, use your own backend
        const response = await fetch(
          "https://api.allorigins.win/raw?url=" +
            encodeURIComponent(
              "https://api.github.com/repos/2MJ-DEV/BuyMeACoffee-Africa/contributors"
            )
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contributors");
        }

        const data = await response.json();
        setContributors(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen from-amber-50 to-yellow-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
          <p className="mt-4 text-gray-700 font-medium">
            Loading contributors...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen from-amber-50 to-yellow-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <div className="text-red-600 text-center">
            <svg
              className="w-16 h-16 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-xl font-bold mb-2">
              Error Loading Contributors
            </h2>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[80%] 2xl:w-[50%] mx-auto">
        <div className="">
          <div className="">
            {/* Header Section */}
            <div className="py-30 mt-5 relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-5 px-6">
              <h1 className="text-primary/90 text-4xl font-semibold">
                Our Amazing Contributors 😎
              </h1>
              <p className="max-w-lg text-center text-black/60 font-light">
                Thank you to all the wonderful people who have contributed to
                BuyMeACoffee-Africa! Your contributions make this project
                possible.
              </p>
            </div>

            <div>
              <div className="bg-zinc-950/5 relative mx-auto flex h-px w-full max-w-lg items-center justify-center gap-2 mb-15">
                <div className="bg-zinc-950/5 relative mx-auto flex h-px w-full max-w-lg items-center justify-center gap-2">
                  <div className="rounded-[1px] bg-zinc-100 border border-zinc-950/5 absolute z-50 top-0 left-0 -translate-x-1/2 -translate-y-1/2 size-[10px]"></div>
                  <div className="rounded-[1px] bg-zinc-100 border border-zinc-950/5 absolute z-50 -bottom-[5px] -right-[5px] size-[10px]"></div>
                </div>
              </div>
            </div>

            {/* Contributors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {contributors.map((contributor) => (
                <a
                  key={contributor.id}
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl border border-yellow-950/5 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 p-6 flex flex-col items-center group"
                >
                  <div className="relative mb-4">
                    <img
                      src={contributor.avatar_url}
                      alt={`${contributor.login}'s avatar`}
                      className="w-24 h-24 rounded-full border-4 border-yellow-200 group-hover:border-yellow-400 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
                      {contributor.contributions}
                    </div>
                  </div>

                  <h3 className="text-md font-medium text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 text-center">
                    {contributor.login}
                  </h3>

                  <p className="text-sm font-light text-zinc-500 mt-1">
                    {contributor.contributions} contribution
                    {contributor.contributions !== 1 ? "s" : ""}
                  </p>
                </a>
              ))}
            </div>

            <div>
              <div className="bg-zinc-950/5 relative mx-auto flex h-px w-full max-w-lg items-center justify-center gap-2 mt-15 mb-15">
                <div className="bg-zinc-950/5 relative mx-auto flex h-px w-full max-w-lg items-center justify-center gap-2">
                  <div className="rounded-[1px] bg-zinc-100 border border-zinc-950/5 absolute z-50 top-0 left-0 -translate-x-1/2 -translate-y-1/2 size-[10px]"></div>
                  <div className="rounded-[1px] bg-zinc-100 border border-zinc-950/5 absolute z-50 -bottom-[5px] -right-[5px] size-[10px]"></div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="border border-zinc-950/5 rounded-4xl relative mx-auto flex w-full py-20 m-20 flex-col items-center justify-center gap-8 px-6 pb-20">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h3 className="text-primary/90 text-3xl font-semibold">
                  Ready to contribute?
                </h3>
                <p className="max-w-xl">
                  Want to see your name here? Check out our GitHub repository and start contributing today!
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/2MJ-DEV/BuyMeACoffee-Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-2 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 border border-zinc-950/5 bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out active:scale-[0.93]"
                >
                  View on Github
                </a>
                <button
                  onClick={() => window.location.href = "/"}
                  className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-3 rounded-md gap-1.5 px-5 has-[>svg]:px-3 border border-zinc-950/5 text-black hover:bg-zinc-950/5 transition-all duration-300 ease-in-out active:scale-[0.93]"
                >
                  Back to home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
