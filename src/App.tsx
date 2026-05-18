import Navbar from './components/Navbar'
import Hero from './components/็Hero'
import './App.css'
import './components/Footer'
import './components/About'
import './components/็Hero'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#F6F3EF] text-text-main md:pb-40">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;