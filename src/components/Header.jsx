// Header.jsx
// En-tête de la page.
//
// Contenu :
//   - Logo "meet" centré horizontalement
//   - Asset : /assets/logo.svg
//
// Pas de navigation, pas de liens.

function Header() {
  return (
    <header className="flex justify-center pt-header">
      <img src="/assets/logo.svg" alt="meet logo" />
    </header>
  );
}

export default Header;
