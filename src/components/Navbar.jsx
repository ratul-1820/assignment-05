import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Logo({ compact = false }) {
  return (
    <a href="#home" className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
        DS
      </span>
      <span className={`text-xl font-bold text-gray-900 ${compact ? 'hidden sm:inline' : ''}`}>
        Dev <span className="text-brand">Stack</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Left: hamburger (mobile) / logo (desktop) */}
        <div className="flex flex-1 items-center">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 md:hidden"
          >
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-xl text-gray-800`}></i>
          </button>
          <div className="hidden md:block">
            <Logo />
          </div>
        </div>

        {/* Center: links (desktop) / logo (mobile) */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition hover:text-pink-600 ${
                index === 0 ? 'text-pink-600' : 'text-gray-700'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <Logo compact />
        </div>

        {/* Right: auth buttons */}
        <div className="flex flex-1 items-center justify-end gap-1 sm:gap-3">
          <button className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 sm:px-3">
            Sign In
          </button>
          <button className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="flex flex-col border-t border-gray-100 bg-white px-4 py-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium text-gray-700 hover:text-pink-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}