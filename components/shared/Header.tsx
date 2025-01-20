import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="max-w-[1420px] mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="text-2xl font-semibold">Mumair</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-black hover:text-orange-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-black hover:text-orange-500 transition-colors"
          >
            About Me
          </Link>
          <Link
            href="/services"
            className="text-black hover:text-orange-500 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-black hover:text-orange-500 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/testimonials"
            className="text-black hover:text-orange-500 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-orange-500 transition-colors"
          >
            Contact
          </Link>
        </div>

        <Link
          href="/cv.pdf"
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
        >
          Download CV
        </Link>
      </nav>
    </header>
  );
};

export default Header;
