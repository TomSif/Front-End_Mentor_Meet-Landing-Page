// NumberedDivider.jsx
// Séparateur visuel entre les sections.
//
// Structure :
//   - Ligne verticale fine (1px, couleur slate-300)
//   - Cercle centré en bas de la ligne avec un numéro
//
// Props :
//   - number : string  →  "01" ou "02"
//
// Utilisé deux fois dans App.jsx :
//   <NumberedDivider number="01" />  entre Hero et Features
//   <NumberedDivider number="02" />  entre Features et Footer

function NumberedDivider({ number }) {
  return (
    <div className="flex flex-col items-center  w-14 h-34 m-auto">
      <div className=" w-px h-20 bg-slate-300 "></div>
      <div className="rounded-full preset-5 text-slate-600 border-slate-300 border w-14 h-14 flex flex-col self-center justify-center text-center">
        {number}
      </div>
    </div>
  );
}

export default NumberedDivider;
