
import { useState } from "react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/90 backdrop-blur-lg">

      <div className="px-6 md:px-12 py-5 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold">
          <span className="text-white">soumojit</span>
          <span className="text-fuchsia-400">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 hover:text-fuchsia-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden lg:inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold hover:scale-105 transition-transform"
        >
          Let's Talk ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-2xl"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-800 px-6 py-5">

          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-fuchsia-400 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-center font-semibold"
            >
              Let's Talk ↗
            </a>
          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar
