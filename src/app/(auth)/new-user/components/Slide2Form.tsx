import { ScrollArea } from "@/components/ui/scroll-area";
import { FC } from "react";
import { availableSchools } from "../data/schools";
import { SchoolCard } from "./school-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";

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
      <div className="flex">
        <Swiper
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Scrollbar]}
          className="flex w-80"
        >
          {availableSchools.map((school) => (
            <SwiperSlide key={school.id}>
              <SchoolCard
                school={school}
                className="w-[150px]"
                aspectRatio="square"
                width={150}
                height={150}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide2Form;
