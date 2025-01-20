import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-[148px] items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-h5 font-semibold">Hi I am</h2>
          <h1 className="text-h3 font-semibold text-primary">
            <span className="text-orange-500">Muhammad Umair</span>
          </h1>
          <div className="space-y-2">
            <h2 className="text-display font-bold">UI & UX</h2>
            <h2 className="text-display font-bold ml-[32%]">Designer</h2>
          </div>
        </div>

        <p className="text-text-md max-w-3xl pt-5">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>

        <button className="bg-orange-500 text-white py-4 px-14 rounded-md hover:bg-orange-600 transition-colors text-text-md">
          Hire Me
        </button>
      </div>

      <div>
        <div className="relative w-full h-[400px] lg:h-[617px]">
          <Image
            src="/user.png"
            alt="Profile Image"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 400px, 617px"
            priority
            quality={100}
          />
          <div className="absolute top-[13%] right-[22%] w-[374px] h-[83px] bg-primary/50 z-30" />
        </div>

        <div className="flex gap-6 justify-center mt-8">
          <Link
            href="#"
            className="text-foreground hover:text-orange-500 transition-colors"
          >
            <Facebook size={24} />
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-orange-500 transition-colors"
          >
            <Twitter size={24} />
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-orange-500 transition-colors"
          >
            <Instagram size={24} />
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-orange-500 transition-colors"
          >
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
