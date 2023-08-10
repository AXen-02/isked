import { FC } from "react";
import Loader from "../loaders/Loader";

interface RotGBCardProps {}

const RotGBCard: FC<RotGBCardProps> = ({}) => {
  return (
    <div className="w-full h-[70vh] bg-card border-2 relative flex justify-center items-center overflow-hidden rounded-2xl">
      <div className="z-10 text-card-foreground text-2xl">
        Card content here
      </div>
      <div className="absolute w-[10vw] h-[200vh] animate-rotBGimg">
        <div className="bg-gradient-to-b from-primary-foreground to-primary w-full h-full"></div>
      </div>
      <div className="absolute inset-5 bg-card rounded-lg"></div>
    </div>
  );
};

export default RotGBCard;
