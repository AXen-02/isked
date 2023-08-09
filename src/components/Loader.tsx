import { FC } from "react";
interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className="space-y-10">
      <div className="w-14 h-14 mx-auto relative">
        {/* <div className="w-12 h-1 bg-red-200 opacity-25 absolute top-16 left-0 rounded-full animate-shadow"></div> */}
        <div className="w-full h-full bg-primary absolute top-0 left-0 rounded-md animate-jump"></div>
      </div>
    </div>
  );
};

export default Loader;
