"use client";

import { testimonials } from "@/data/localData";
import { motion, PanInfo, useAnimation } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [windowWidth, setWindowWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window?.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getNormalizedIndex = (index: number) => {
    return (index + testimonials?.length) % testimonials?.length;
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50;
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        setCurrentIndex((prev) => getNormalizedIndex(prev - 1));
      } else {
        setCurrentIndex((prev) => getNormalizedIndex(prev + 1));
      }
    }
    controls.start({ x: 0 });
  };

  const getSlidePosition = (index: number) => {
    const baseWidth = 370;
    const mobileWidth = 300;
    const isMobile = windowWidth < 768;
    const center = currentIndex;

    let offset = index - center;
    if (Math.abs(offset) > testimonials?.length / 2) {
      offset = offset - Math.sign(offset) * testimonials?.length;
    }

    return {
      initial: {
        scale: 0.8,
        opacity: 0.4,
        x: `calc(${index - 1} * (60% + ${mobileWidth}px))`,
        rotateY: 0,
      },
      animate: {
        x: `calc(${offset} * (${isMobile ? "90%" : "60%"} + ${
          isMobile ? mobileWidth : baseWidth
        }px))`,
        scale: index === center ? 1 : 0.8,
        opacity: index === center ? 1 : 0.4,
        rotateY: offset * -15,
        z: index === center ? 0 : -100,
      },
    };
  };

  return (
    <div id="testimonials" className="pb-[60px] md:pb-[120px] overflow-hidden">
      <div className="text-center mb-8 md:mb-16 px-4">
        <h2 className="text-display1-mobile md:text-display1 font-semibold mb-4">
          Testimonials
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-text-md-mobile md:text-text-md mb-16">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

      <div className="relative h-[600px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
        {testimonials.map((_, idx) => {
          const isActive = idx === currentIndex;
          const positions = getSlidePosition(idx);

          return (
            <motion.div
              key={idx}
              style={{
                position: "absolute",
                width: "100%",
                maxWidth: isActive
                  ? windowWidth < 768
                    ? "100%"
                    : "900px"
                  : "700px",
                zIndex: isActive ? 2 : 1,
                perspective: "1000px", // Add perspective for 3D effect
                transformStyle: "preserve-3d",
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
                  <div className="relative w-[180px] h-[180px] md:w-[235px] md:h-[235px] shrink-0">
                    <Image
                      src={testimonials[idx]?.image}
                      alt={testimonials[idx]?.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="235px"
                      priority={isActive}
                    />
                  </div>
                  <div className="flex-1 md:h-[234px] flex flex-col justify-between text-center md:text-left">
                    <div className="relative">
                      <Quote className="hidden md:block absolute -top-4 -left-2 w-8 h-8 text-primary opacity-20" />
                      <p className="text-gray-700 text-text-sm md:text-text-md mb-6 pt-4 italic">
                        {testimonials[idx]?.content}
                      </p>
                      <Quote className="hidden md:block absolute -bottom-4 -right-0 w-8 h-8 text-primary opacity-20" />
                    </div>
                    <div className="mt-auto">
                      <h4 className="font-medium text-text-h5-mobile md:text-h5 text-gray-500 ">
                        {testimonials[idx]?.name}
                      </h4>
                      <p className="text-gray-500 text-text-base-mobile md:text-text-base">
                        {testimonials[idx]?.role}
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
};
export default TestimonialSlider;
