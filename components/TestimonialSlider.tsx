"use client";

import { motion, PanInfo, useAnimation } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    name: "John Smith",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
  },
  {
    id: 2,
    content:
      "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched. They've transformed our vision into reality.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
  },
  {
    id: 3,
    content:
      "The level of professionalism and creativity they bring to the table is exceptional. Our project was delivered on time and exceeded all expectations.",
    name: "Michael Chen",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50;
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (info.offset.x < 0 && currentIndex < testimonials.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
    controls.start({ x: 0 });
  };

  const getSlidePosition = (index: number) => {
    const offset = index - currentIndex;
    const baseWidth = 300;
    const mobileWidth = 200;
    return {
      initial: {
        scale: index === 1 ? 1 : 0.8,
        opacity: index === 1 ? 1 : 0.4,
        x: `calc(${index - 1} * (60% + ${baseWidth}px))`,
      },
      animate: {
        x: `calc(${offset} * (60% + clamp(${mobileWidth}px, 30vw, ${baseWidth}px)))`,
        scale: index === currentIndex ? 1 : 0.8,
        opacity: index === currentIndex ? 1 : 0.4,
      },
    };
  };

  return (
    <div className="pb-[60px] md:pb-[120px] overflow-hidden">
      <div className="text-center mb-8 md:mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

      <div className="relative h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
        {testimonials.map((_, idx) => {
          const isActive = idx === currentIndex;
          const positions = getSlidePosition(idx);

          return (
            <motion.div
              key={idx}
              style={{
                position: "absolute",
                width: "100%",
                maxWidth: isActive ? "800px" : "700px",
                zIndex: isActive ? 2 : 1,
              }}
              initial={positions?.initial}
              animate={positions?.animate}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className={`cursor-pointer ${
                isActive ? "z-10" : "z-0"
              } px-4 md:px-0 pb-16`}
            >
              <div
                className={`bg-[#F8F8F8] rounded-2xl shadow-xl p-4 md:p-8 lg:py-[55px] lg:px-[45px] ${
                  isActive ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                  <div className="relative w-[235px] h-[235px] shrink-0">
                    <Image
                      src={testimonials[idx].image}
                      alt={testimonials[idx].name}
                      fill
                      className="rounded-full object-cover"
                      sizes="235px"
                      priority={isActive}
                    />
                  </div>
                  <div className="flex-1 lg:h-[234px] flex flex-col justify-between">
                    <div className="relative">
                      <Quote className="absolute -top-4 -left-2 w-8 h-8 text-primary opacity-20" />
                      <p className="text-gray-700 text-base md:text-lg mb-6 pt-4 italic">
                        {testimonials[idx].content}
                      </p>
                      <Quote className="absolute -bottom-4 -right-0 w-8 h-8 text-primary opacity-20" />
                    </div>
                    <div className="mt-auto">
                      <h4 className="font-semibold text-lg md:text-xl">
                        {testimonials[idx].name}
                      </h4>
                      <p className="text-gray-500 text-sm md:text-base">
                        {testimonials[idx].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 !mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
              }}
              className={`w-8 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
