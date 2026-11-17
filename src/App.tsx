import { About } from './components/About'
import { Contact } from './components/Contact'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { ProblemSolution } from './components/ProblemSolution'
import { SofiaSection } from './components/SofiaSection'

export default function App() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <SofiaSection />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
