import Loader from "@/components/Loader";
import RotGBCard from "@/components/RotGBCard";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="p-20">
      {/* Schedule <Loader /> */}
      <RotGBCard />
    </div>
  );
};

export default page;
