import { FC } from "react";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = ({}) => {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Error 404
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Page not found lods. Sinubukan mong mag-navigate sa mga unsolved na mga
        palaisipan ng web. 🌌🕳️
      </p>
    </div>
  );
};

export default NotFound;
