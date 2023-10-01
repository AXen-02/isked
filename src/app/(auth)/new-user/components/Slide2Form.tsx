import { ScrollArea } from "@/components/ui/scroll-area";
import { FC } from "react";
import { availableSchools } from "../data/schools";
import { SchoolCard } from "./school-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

interface Slide2FormProps {
  user: {
    name: string | null;
    bio: string | null;
    id: string;
  };
}

const Slide2Form: FC<Slide2FormProps> = ({ user }) => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Scrollbar]}
        className="relative space-x-4 pb-4 w-96"
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
