import { FC } from "react";

interface RotGBCardProps {}

const RotGBCard: FC<RotGBCardProps> = ({}) => {
  return (
    <div className="w-full h-[70vh] bg-card border-2 relative flex justify-center items-center overflow-hidden rounded-2xl">
      <h2 className="z-10 text-secbg-card-foreground text-2xl">Card Content</h2>
      <div className="absolute w-[10vw] h-[200vh] animate-rotBGimg">
        <div className="bg-gradient-to-b from-blue-500 to-pink-500 w-full h-full"></div>
      </div>
      <div className="absolute inset-5 bg-card rounded-lg"></div>
    </div>
  );
};

export default RotGBCard;
