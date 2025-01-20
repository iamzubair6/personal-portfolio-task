import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/#" },
    { name: "Services", href: "/#" },
    { name: "Projects", href: "/#" },
    { name: "Testimonials", href: "/#" },
    { name: "Contact", href: "/#" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ];

  return (
    <footer className="bg-[#F8F8F8]">
      <div className="pt-12">
        <div className="flex flex-col items-center">
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
            <p className="text-h2 font-thin text-black">
              <span className="font-bold">M</span>umair
            </p>
          </div>

          {/* Navigation */}
          <nav className="my-20">
            <ul className="flex flex-wrap justify-center gap-10">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors text-text-md-mobile md:text-text-md"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-text-md-mobile md:text-text-md text-white bg-[#545454] w-full py-[26px]">
            <p>
              © 2023 <span className="text-primary font-bold">Mumair</span> All
              Rights Reserved, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
