import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import ThemeSelector from './components/ThemeSelector';

export default function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <GithubActivity />
        <Contact />
      </main>
      <footer className='text-center py-4 text-sm border-t border-gray-700'>
        © 2025 Nico Rolon | Portfolio Profesional
      </footer>
      <ThemeSelector />
    </div>
  );
}
