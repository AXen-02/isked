import Loader from "@/components/uiverse/loaders/Loader";
import RotGBCard from "@/components/uiverse/cards/RotGBCard";
import { FC } from "react";
import GooeyButton from "@/components/uiverse/buttons/GooeyButton";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex justify-center items-center m-20">
      {/* Schedule <Loader /> */}
      {/* <RotGBCard /> */}
      <GooeyButton />
    </div>
  );
};

export default page;
