import { services } from "@/data/localData";
import Image from "next/image";
const Services = () => {
  return (
    <section id="services" className="pb-[60px] md:pb-[120px]">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-display1-mobile md:text-display1 font-semibold">
          Services
        </h2>
        <p className=" max-w-3xl mx-auto text-text-md-mobile md:text-text-md">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services?.map((service) => (
          <div
            key={service?.title}
            className="bg-[#F8F8F8] p-8 rounded-xl hover:shadow-lg transition-shadow group"
          >
            <div className="relative w-[72px] h-[82px] mb-6">
              <Image
                src={service?.image}
                alt="service?"
                fill
                priority
                sizes="(max-width: 768px) 72px, 82px"
                className="object-contain"
              />
            </div>
            <h3 className="text-h3-mobile md:text-h3 font-semibold mb-4 text-black">
              {service?.title}
            </h3>
            <p className="text-black text-text-base-mobile md:text-text-base">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
