import { MaskImageProps } from "@/types/propType";
import Image from "next/image";

const MaskImage: React.FC<MaskImageProps> = ({ src }) => {
  return (
    <div className="relative w-full h-[400px] lg:h-[617px]">
      <Image
        src={src}
        alt="Profile Image"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 400px, 617px"
        priority
        quality={100}
      />
      <div className="absolute top-[13%] right-[15%] lg:right-[22%] w-[280px] lg:w-[374px] h-[60px] lg:h-[83px] bg-primary/50 z-30" />
    </div>
  );
};

export default MaskImage;
