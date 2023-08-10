import Loader from "@/components/uiverse/loaders/Loader";
import RotGBCard from "@/components/uiverse/cards/RotGBCard";
import { FC } from "react";
import GooeyButton from "@/components/uiverse/buttons/GooeyButton";
import LogoNameButton from "@/components/uiverse/buttons/LogoNameButton";
import HexaLoader from "@/components/uiverse/loaders/HexaLoader";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center mx-20 my-2 space-y-10">
      {/* Schedule <Loader /> */}
      {/* <RotGBCard /> */}
      {/* <LogoNameButton title="isked" /> */}
      {/* <GooeyButton /> */}
      <HexaLoader />
    </div>
  );
};

export default page;
