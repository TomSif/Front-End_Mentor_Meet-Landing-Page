import Header from "./components/Header";
import Hero from "./components/Hero";
import NumberedDivider from "./components/NumberedDivider";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="pt-8 md:pt-13.5 pb-16 md:pb-18 px-8 lg:px-20">
        <NumberedDivider number="01" />
        <Features />
      </div>
      <NumberedDivider number="02" />
      <Footer />
    </>
  );
}

export default App;
