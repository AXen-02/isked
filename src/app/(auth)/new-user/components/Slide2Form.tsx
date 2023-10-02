import { ScrollArea } from "@/components/ui/scroll-area";
import { FC } from "react";
import { availableSchools } from "../data/schools";
import { SchoolCard } from "./school-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide2FormProps {
  user: {
    name: string | null;
    bio: string | null;
    id: string;
  };
}

const Slide2Form: FC<Slide2FormProps> = ({ user }) => {
  return (
    <div className="w-[70vw] max-w-2xl pb-8 pt-2 md:pb-10 md:pt-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Scrollbar]}
        className="flex space-x-4 pb-4 w-full"
      >
        {availableSchools.map((school) => (
          <SwiperSlide
            key={school.id}
            className="text-center flex justify-center items-center"
          >
            <SchoolCard
              school={school}
              className="w-[80px]"
              aspectRatio="square"
              width={80}
              height={80}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide2Form;
