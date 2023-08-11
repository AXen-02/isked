import { FC } from "react";
import "../styles/HexaLoaderLight.css";
import { cn } from "@/lib/utils";
interface HexaLoaderLightProps {}

const HexaLoaderLight: FC<HexaLoaderLightProps> = ({}) => {
  const socket =
    "w-[200px] h-[200px] absolute left-1/2 -ml-[100px] top-1/2 -mt-[100px]";
  const hexBrick = "bg-violet-800 w-[30px] h-[17px] absolute animate-fade00 ";
  const h1Class = "transform rotate-0",
    h2Class = "transform rotate-60",
    h3Class = "transform -rotate-60";

  return (
    <div className={cn(socket, " ")}>
      <div className="gel center-gel">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c1 r1">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c2 r1">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c3 r1">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c4 r1">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c5 r1">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c6 r1">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>

      <div className="gel c7 r2">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>

      <div className="gel c8 r2">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c9 r2">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c10 r2">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c11 r2">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c12 r2">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c13 r2">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c14 r2">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c15 r2">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c16 r2">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c17 r2">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c18 r2">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c19 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c20 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c21 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c22 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c23 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c24 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c25 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c26 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c28 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c29 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c30 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c31 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c32 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c33 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c34 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c35 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c36 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className="gel c37 r3">
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
    </div>
  );
};

export default HexaLoaderLight;
