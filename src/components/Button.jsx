// Button.jsx
// Bouton réutilisable avec deux variantes visuelles.
//
// Props :
//   - variant : "cyan" | "purple"
//   - children : contenu du bouton (texte, spans...)
//
// Utilisé dans : Hero.jsx, Footer.jsx
//
// Variantes :
//   cyan   → fond cyan-600,   texte white  → "Download v1.3"
//   purple → fond purple-600, texte white  → "What is it?"
//
// Hover states à prévoir (challenge requirement) :
//   cyan   → éclaircit vers cyan-300
//   purple → éclaircit vers purple-300

function Button({ variant, children }) {
  return (
    <button
      className={`text-white preset-5 pt-4 pb-4 pl-10 pr-10 rounded-full ${
        variant === "cyan"
          ? "bg-cyan-600 hover:bg-cyan-300"
          : "bg-purple-600  hover:bg-purple-300"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
