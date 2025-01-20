import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-h5 font-semibold">Hi I am</h2>
          <h1 className="text- font-bold">
            <span className="text-orange-500">Muhammad Umair</span>
          </h1>
          <div className="space-y-2">
            <h2 className="text-6xl font-bold">UI & UX</h2>
            <h2 className="text-6xl font-bold">Designer</h2>
          </div>
        </div>

        <p className="text-gray-600 max-w-lg">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>

        <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors">
          Hire Me
        </button>
      </div>

      <div className="relative">
        <div className="relative w-[500px] h-[500px] mx-auto">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-200 rounded-full -z-10" />
          <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
              alt="Profile Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-6 bg-white p-4 rounded-full shadow-lg">
          <Link
            href="#"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            <Facebook size={24} />
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            <Twitter size={24} />
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            <Instagram size={24} />
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
