// Button.jsx
// Bouton réutilisable avec deux variantes visuelles.
// Props :
//   - variant : "cyan" | "purple"

function Button({ variant, children, className = "" }) {
  return (
    <button
      className={`text-white preset-5 pt-4 pb-4 pl-10 pr-10 rounded-full transition-colors duration-300 ${className} ${
        variant === "cyan"
          ? "bg-cyan-600 hover:bg-[#71C0D4]"
          : "bg-purple-600  hover:bg-[#B18BDD]"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
