import { FC } from "react";

interface GooeyButtonProps {}

const GooeyButton: FC<GooeyButtonProps> = ({}) => {
  return (
    <>
      <button className="c-button c-button--gooey relative">
        GETTING STARTED
        <div className="c-button__blobs absolute inset-0">
          <div className="bg-blue-500 w-1/3 h-full rounded-full absolute left-0 transform scale-140 -translate-y-125 translate-z-0 transition duration-700 ease"></div>
          <div className="bg-blue-500 w-1/3 h-full rounded-full absolute left-1/3 transform scale-140 -translate-y-125 translate-z-0 transition duration-700 ease delay-60"></div>
          <div className="bg-blue-500 w-1/3 h-full rounded-full absolute left-2/3 transform scale-140 -translate-y-125 translate-z-0 transition duration-700 ease delay-25"></div>
        </div>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "block", height: "0", width: "0" }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default GooeyButton;
