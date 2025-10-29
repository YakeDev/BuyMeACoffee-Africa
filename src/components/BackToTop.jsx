import { ArrowUpCircle } from "lucide-react";
import React, { useEffect } from "react";

const BackToTop = ({ t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fonction pour remonter en haut de la page
  const handleScrollToTop = (e) => {
    e.preventDefault();
    const topElement = document.getElementById("guide-top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    // Bouton "Back to Top" — positionné en bas à droite
    <div className="fixed bottom-8 inset-x-0 z-50 pointer-events-none">
      <div className="mx-auto max-w-7xl px-6 flex justify-end pl-6 pr-8 md:pr-12">
        <button
          onClick={handleScrollToTop}
          className="p-3 rounded-full bg-[var(--color-coffee)] text-[var(--color-cream)] shadow-lg
               transition duration-200 ease-in-out 
               hover:bg-[color-mix(in_srgb,var(--color-coffee)_88%,black)] 
               hover:-translate-y-px 
               hover:shadow-[0_22px_48px_rgba(107,62,38,0.28)]
               mr-2
               pointer-events-auto"
          aria-label={
            t
              ? t("guide.common.backToTop", { defaultValue: "Back to top" })
              : "Back to top"
          }
        >
          <ArrowUpCircle className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default BackToTop;
