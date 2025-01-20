import Image from "next/image";
const Services = () => {
  const services = [
    {
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
      image: "/1.svg",
    },
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
      image: "/2.svg",
    },
    {
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
      image: "/3.svg",
    },
    {
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
      image: "/4.svg",
    },
  ];
  return (
    <section className="pb-[60px] md:pb-[120px]">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-display1-mobile md:text-display1 font-semibold">
          Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-text-md-mobile md:text-text-md">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-[#F8F8F8] p-8 rounded-xl hover:shadow-lg transition-shadow group"
          >
            <div className="relative w-[72px] h-[82px] mb-6">
              <Image
                src={service.image}
                alt="service"
                fill
                priority
                sizes="(max-width: 768px) 72px, 82px"
                className="object-contain"
              />
            </div>
            <h3 className="text-h3-mobile md:text-h3 font-semibold mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 text-text-base-mobile md:text-text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
