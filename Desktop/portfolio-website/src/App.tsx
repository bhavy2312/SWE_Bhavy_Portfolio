import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LiquidBackground from './components/LiquidBackground';

function App() {
  return (
    <div className="app">
      <LiquidBackground />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
