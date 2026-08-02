import { SmoothScroller } from './components/SmoothScroller';
import { CustomCursor } from './components/CustomCursor';
import { GrainOverlay } from './components/GrainOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsTicker } from './components/SkillsTicker';
import { HowIBuild } from './components/HowIBuild';
import { FeaturedWork } from './components/FeaturedWork';
import { Experience } from './components/Experience';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  return (
    <SmoothScroller>
      <div className="min-h-screen bg-background text-foreground relative selection:bg-accent selection:text-background">
        <CustomCursor />
        <GrainOverlay />
        
        <Navbar />
        
        <main>
          <Hero />
          <SkillsTicker />
          
          <About />
          <SkillsTicker />
          
          <HowIBuild />
          <SkillsTicker />
          
          <FeaturedWork />
          <SkillsTicker />
          
          <Experience />
          <SkillsTicker />
          
          <Stats />
          
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroller>
  );
}

export default App;
