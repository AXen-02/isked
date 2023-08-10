import { FC } from "react";
interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className="w-10 h-10 mx-auto mb-2 relative">
      {/* <div className="w-12 h-1 bg-red-200 opacity-25 absolute top-16 left-0 rounded-full animate-shadow"></div> */}
      <div className="w-full h-full bg-primary opacity-70 rounded-md animate-jump"></div>
    </div>
  );
};

export default Loader;
