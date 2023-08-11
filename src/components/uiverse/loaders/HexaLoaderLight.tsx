import { FC } from "react";
import "../styles/HexaLoaderLight.css";
import { cn } from "@/lib/utils";
interface HexaLoaderLightProps {}

const HexaLoaderLight: FC<HexaLoaderLightProps> = ({}) => {
  const socket = "w-[200px] h-[200px] relative -ml-[100px] -mt-[100px]";
  const hexBrick = "bg-primary w-[30px] h-[17px] absolute animate-fade00 ";
  const h1Class = "transform rotate-0",
    h2Class = "transform rotate-60",
    h3Class = "transform -rotate-60";
  const gelClass =
    "h-[30px] w-[30px] animate-fade00 transition-all duration-3000 absolute top-1/2 left-1/2";
  const centerGelClass = "-ml-[15px] -mt-[15px] animate-pulse00";
  const r1Class = "animate-pulse00 transition-all delay-200",
    r2Class = "animate-pulse00 transition-all delay-400",
    r3Class = "animate-pulse00 transition-all delay-600";

  return (
    <div className={cn(socket, " ")}>
      <div className={`${gelClass} ${centerGelClass}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c1 ${r1Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c2 ${r1Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c3 ${r1Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c4 ${r1Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c5 ${r1Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c6 ${r1Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>

      <div className={`${gelClass} c7 ${r2Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>

      <div className={`${gelClass} c8 ${r2Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c9 ${r2Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c10 ${r2Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c11 ${r2Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c12 ${r2Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c13 ${r2Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c14 ${r2Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c15 ${r2Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c16 ${r2Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c17 ${r2Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c18 ${r2Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c19 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c20 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c21 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c22 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c23 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c24 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c25 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c26 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c28 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c29 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c30 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c31 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c32 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c33 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c34 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c35 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c36 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
      <div className={`${gelClass} c37 ${r3Class}`}>
        <div className={`${hexBrick} ${h1Class}`}></div>
        <div className={`${hexBrick} ${h2Class}`}></div>
        <div className={`${hexBrick} ${h3Class}`}></div>
      </div>
    </div>
  );
};

export default HexaLoaderLight;
