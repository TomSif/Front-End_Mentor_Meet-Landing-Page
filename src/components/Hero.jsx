// Hero.jsx
// Section principale au-dessus de la fold.
//
// Structure (3 colonnes) :
//   [images gauche] | [texte centré] | [images droite]
//
// Colonne centrale :
//   - Heading  "Group Chat for Everyone"  → preset-1
//   - Sous-titre                          → preset-4
//   - Deux boutons : <Button variant="cyan"> et <Button variant="purple">
//
// Images latérales :
//   - desktop : image-hero-left.png / image-hero-right.png
//   - tablet  : image-hero.png (une seule image, recadrée)
//   - Les images débordent hors du conteneur (overflow visible)
//
// Imports nécessaires : Button
import Button from "./Button";

function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] pt-hero pb-hero items-start">
      <picture className="flex justify-center  lg:justify-end lg:col-start-1">
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/desktop/image-hero-left.webp"
        />
        <img
          src="/assets/tablet/image-hero.webp"
          alt=""
          className=" max-w-none shrink-0 w-[107%] "
        />
      </picture>
      <div className="flex flex-col  col-span-2 row-start-2 lg:col-start-2 lg:row-start-1 lg:col-span-1 max-w-md mx-auto w-full items-center gap-6">
        <h1 className="preset-1 text-center">
          Group Chat
          <br />
          for Everyone
        </h1>
        <p className="preset-4 text-center text-slate-600">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <div className="flex flex-col lg:flex-row self-center gap-4">
          <Button variant="cyan" aria-label="Download Meet v1.3">
            Download <span className="text-cyan-300">v1.3</span>
          </Button>
          <Button variant="purple">What is it?</Button>
        </div>
      </div>
      <picture className=" hidden  lg:col-start-3 lg:row-start-1 lg:flex lg:justify-start ">
        <img
          className=" max-w-none shrink-0 w-[107%] "
          src="/assets/desktop/image-hero-right.webp"
          alt=""
        />
      </picture>
    </div>
  );
}

export default Hero;
