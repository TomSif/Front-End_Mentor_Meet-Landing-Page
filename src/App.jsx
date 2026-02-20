import Header from './components/Header'
import Hero from './components/Hero'
import NumberedDivider from './components/NumberedDivider'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <NumberedDivider number="01" />
      <Features />
      <NumberedDivider number="02" />
      <Footer />
    </>
  )
}

export default App
