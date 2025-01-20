import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-background pt-[61px]">
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
      </nav>
    </header>
  );
};

export default Header;
