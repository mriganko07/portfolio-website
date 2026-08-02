export function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 flex items-center justify-center border-t border-border bg-background">
      <p className="text-foreground/50 text-xs md:text-sm uppercase tracking-widest text-center">
        © {new Date().getFullYear()} Mriganka Adhikary. Crafted with <span className="text-accent">♥</span>
      </p>
    </footer>
  )
}
