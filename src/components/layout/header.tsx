import { useState } from 'react';
import Logo from '@/assets/logo.svg';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'Approach' },
  { href: '#values', label: 'Values' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-16 items-center justify-between">
      <a href="/" className="shrink-0">
        <img src={Logo} alt="logo" className="h-8 w-auto" />
      </a>

      <nav className="hidden md:block lg:ml-48">
        <ul className="flex gap-10 text-base font-bold">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="transition-colors hover:text-primary/90 focus:text-primary">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button className="ml-36 md:hidden" aria-label="Toggle menu" onClick={() => setOpen((p) => !p)}>
        {open ? <X className="h-9 w-9" /> : <Menu className="h-9 w-9" />}
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" /> Close
            </button>
            <ul className="space-y-4 text-lg font-bold">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md bg-blue-50 px-4 py-3 transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
