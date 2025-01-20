"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background pt-[61px] relative z-40">
      <div className="max-w-container-mobile md:max-w-container mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="relative w-[67px] h-[67px]">
              <Image
                src={"/logo.svg"}
                alt="brand logo"
                fill
                priority
                sizes="(max-width: 768px) 67px, 67px"
                quality={75}
                style={{ objectFit: "contain" }}
                className="rounded-full"
              />
            </div>
            <p className="text-h2 font-thin text-foreground">
              <span className="font-bold">M</span>umair
            </p>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 z-50 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-text-md font-normal">
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
              className="bg-primary text-white p-4 rounded-md hover:bg-primary/80 transition-colors"
            >
              Download CV
            </Link>
            <ThemeToggle />
          </div>

          {/* Backdrop */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
          )}

          {/* Side Drawer */}
          <div
            className={`fixed top-0 right-0 h-[100dvh] w-[300px] bg-primary/60 backdrop-blur-sm shadow-lg p-6 flex flex-col gap-6 md:hidden transition-transform duration-300 ease-in-out z-50 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-foreground">Menu</p>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-6 text-text-md">
              <Link
                href="/"
                className="text-foreground  transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-foreground  transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Me
              </Link>
              <Link
                href="/services"
                className="text-foreground  transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-foreground  transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/testimonials"
                className="text-foreground  transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="text-foreground  transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/cv.pdf"
                className="bg-primary text-white p-4 rounded-md hover:bg-primary/80 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download CV
              </Link>
            </div>

            <div className="mt-auto flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
