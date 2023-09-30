import { User } from "@prisma/client";
import { FC } from "react";

interface Slide2FormProps {
  user: User;
}

const Slide2Form: FC<Slide2FormProps> = ({ user }) => {
  return <div>Slide2Form</div>;
};

export default Slide2Form;
