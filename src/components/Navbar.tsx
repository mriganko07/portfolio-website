import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { num: '01', label: 'Who I Am', href: '#about' },
  { num: '02', label: 'How I Build', href: '#process' },
  { num: '03', label: 'Featured Work', href: '#work' },
  { num: '04', label: 'Contact', href: '#contact' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 text-foreground py-6 px-6 md:px-12 flex justify-between items-center ${!isOpen ? 'mix-blend-difference' : ''}`}>
      <div className="text-xl font-display font-bold tracking-tighter relative z-50">
        <a href="#" onClick={(e) => {
          if(isOpen) setIsOpen(false);
        }}>MRIGANKA<span className="text-accent">.</span></a>
      </div>

      <div className="hidden md:flex gap-8 text-sm font-medium relative z-50">
        {navLinks.map((link) => (
          <a 
            key={link.num} 
            href={link.href} 
            onClick={(e) => handleScroll(e, link.href)}
            className="group flex items-center gap-2 hover:text-accent transition-colors"
          >
            <span className="text-accent/60 text-xs">{link.num}</span>
            <span className="tracking-tight">{link.label}</span>
          </a>
        ))}
      </div>

      <button 
        className="md:hidden flex flex-col gap-1.5 z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-screen bg-background flex flex-col items-center justify-center -z-10 md:hidden"
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.num} 
                  href={link.href} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="text-3xl font-display font-bold flex gap-4 items-center"
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  <span className="text-accent text-lg">{link.num}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
