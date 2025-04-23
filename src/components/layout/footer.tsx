export default function Footer() {
  return (
    <footer className="bg-brand-blue py-4 text-white">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm">
          © {new Date().getFullYear()} Pristine Minds Nepal. All rights reserved.
        </p>
        <nav className="flex gap-6 text-xs sm:text-sm">
          <a href="#" className="transition hover:text-brand-accent/90">
            Terms of Use
          </a>
          <a href="#" className="transition hover:text-brand-accent/90">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
}
