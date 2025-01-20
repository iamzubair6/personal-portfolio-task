import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-background">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="text-2xl font-semibold text-foreground">Mumair</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About Me
          </Link>
          <Link
            href="/services"
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-foreground hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/testimonials"
            className="text-foreground hover:text-primary transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/cv.pdf"
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Download CV
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
