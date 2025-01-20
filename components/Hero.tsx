import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import MaskImage from "./shared/MaskImage";

const Hero = () => {
  const icon = [
    {
      icon: Facebook,
      href: "#",
    },
    {
      icon: Instagram,
      href: "#",
    },
    {
      icon: Linkedin,
      href: "#",
    },
    {
      icon: Twitter,
      href: "#",
    },
  ];
  return (
    <section
      id="home"
      className="py-[60px] lg:py-[120px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[148px] items-center"
    >
      <div className="space-y-4 lg:space-y-8">
        <div className="space-y-2 lg:space-y-4">
          <h2 className="text-h5-mobile lg:text-h5 font-semibold">Hi I am</h2>
          <h1 className="text-h3-mobile lg:text-h3 font-semibold text-primary">
            <span className="text-orange-500">Muhammad Umair</span>
          </h1>
          <div className="space-y-1 lg:space-y-2">
            <h2 className="text-display-mobile lg:text-display font-bold">
              UI & UX
            </h2>
            <h2 className="text-display-mobile lg:text-display font-bold ml-[20%] lg:ml-[32%]">
              Designer
            </h2>
          </div>
        </div>

        <p className="text-text-md-mobile lg:text-text-md max-w-3xl pt-3 lg:pt-5">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>

        <button className="w-full lg:w-auto bg-orange-500 text-white py-3 lg:py-4 px-8 lg:px-14 rounded-md hover:bg-orange-600 transition-colors text-text-md-mobile lg:text-text-md">
          Hire Me
        </button>
      </div>

      <div>
        <MaskImage src="/user.png" />
        <div className="flex gap-4 lg:gap-6 justify-center mt-6 lg:mt-8">
          {icon.map(({ icon: Icon, href }, idx) => {
            return (
              <Link
                href={href}
                className="text-foreground hover:text-orange-500 transition-colors"
                key={idx}
              >
                <Icon size={24} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
