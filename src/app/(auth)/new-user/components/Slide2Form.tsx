import { ScrollArea } from "@/components/ui/scroll-area";
import { FC } from "react";
import { availableSchools } from "../data/schools";
import { SchoolCard } from "./school-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Skeleton } from "@/components/ui/skeleton";

interface Slide2FormProps {
  user: {
    name: string | null;
    bio: string | null;
    id: string;
  };
}

const Slide2Form: FC<Slide2FormProps> = ({ user }) => {
  return (
    <div className="w-[80vw] sm:max-w-md md:max-w-lg lg:max-w-xl">
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="flex space-x-4 pb-4 cursor-grab active:cursor-grabbing"
      >
        {availableSchools.map((school) => (
          <SwiperSlide key={school.id} className="text-center">
            <SchoolCard
              school={school}
              className="w-[80px]"
              aspectRatio="square"
              width={80}
              height={80}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide className="space-y-2 cursor-wait">
          <Skeleton className="w-[80px] h-[80px]" />
          <Skeleton className="w-[80px] h-[20px]" />
          <Skeleton className="w-[80px] h-[10px]" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide2Form;

// {availableSchools.map((school) => (
//   <SwiperSlide
//     key={school.id}
//     className="text-center flex justify-center items-center  ml-6"
//   >
//     <SchoolCard
//       school={school}
//       className="w-[80px] ml-6"
//       aspectRatio="square"
//       width={80}
//       height={80}
//     />
//   </SwiperSlide>
// ))}
