import Loader from "@/components/uiverse/loaders/Loader";
import RotGBCard from "@/components/uiverse/cards/RotGBCard";
import { FC } from "react";
import GooeyButton from "@/components/uiverse/buttons/GooeyButton";
import LogoNameButton from "@/components/uiverse/buttons/LogoNameButton";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex flex-col mx-20 my-10 space-y-10">
      {/* Schedule <Loader /> */}
      {/* <RotGBCard /> */}
      <LogoNameButton title="iskeddd" />
      <GooeyButton />
    </div>
  );
};

export default page;
