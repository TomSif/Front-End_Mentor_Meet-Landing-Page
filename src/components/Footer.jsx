// Footer.jsx

import Button from "./Button";

function Footer() {
  return (
    <footer className="flex flex-col items-center text-center relative after:absolute after:inset-0 after:bg-cyan-600/80 bg-[url('/assets/mobile/image-footer.webp')] md:bg-[url('/assets/tablet/image-footer.webp')] lg:bg-[url('/assets/desktop/image-footer.webp')] py-16 lg:py-28 px-8 -mt-7">
      <div className="relative z-10  text-white flex flex-col gap-6 max-w-78 md:max-w-126 lg:flex-row lg:max-w-none items-center lg:items-start">
        <h2 className="preset-2  lg:max-w-111 lg:text-left">
          Experience more together
        </h2>
        <p className="preset-4 lg:max-w-89 lg:text-left">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <div className="lg:max-w-64 lg:w-full flex lg:justify-end">
          <Button variant="purple" className=" max-h-41 max-w-48 " aria-label="Download Meet v1.3 — get started">
            Download <span className="text-purple-300">v1.3</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
