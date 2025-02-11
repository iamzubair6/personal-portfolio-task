import { skills } from "@/data/localData";
import MaskImage from "./shared/MaskImage";
import Progress from "./shared/Progress";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[33px] items-center pb-[60px] lg:pb-[120px]"
    >
      <MaskImage src="/user2.png" />
      <div>
        <h2 className="text-display1-mobile md:text-display1 font-semibold ">
          About Me
        </h2>
        <p className="text-gray-600 text-text-md-mobile md:text-text-md py-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <div className="pt-2">
          <div className="space-y-6">
            {skills?.map((skill, idx) => (
              <Progress key={idx} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
