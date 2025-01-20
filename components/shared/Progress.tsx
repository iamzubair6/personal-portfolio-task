import { ProgressProps } from "@/types/propType";

const Progress = ({ title, value }: ProgressProps) => {
  return (
    <div>
      <span className="text-h5-mobile lg:text-h5 font-semibold min-w-[100px]">
        {title}
      </span>
      <div className="relative flex-1 bg-gray-200 h-[12px] rounded-full mt-4">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out rounded-full relative"
          style={{ width: `${value}%` }}
        >
          <div
            className="absolute right-0 top-1/2 w-8 h-8 bg-gray-100 rounded-full border-[2px] border-primary shadow-md"
            style={{ transform: "translate(50%, -50%)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Progress;
