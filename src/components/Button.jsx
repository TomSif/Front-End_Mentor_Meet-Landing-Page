// Button.jsx
// Bouton réutilisable avec deux variantes visuelles.
// Props :
//   - variant : "cyan" | "purple"

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
