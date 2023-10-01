import { FC } from "react";

interface Slide2FormProps {
  user: {
    name: string | null;
    bio: string | null;
    id: string;
  };
}

const Slide2Form: FC<Slide2FormProps> = ({ user }) => {
  return <div>Slide2Form</div>;
};

export default Slide2Form;
