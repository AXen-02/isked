"use client";

import { FC, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { UserType } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { NavigationOptions } from "swiper/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Slide1Form from "./Slide1Form";
import { Separator } from "@/components/ui/separator";

interface NewUserSliderProps {
  className?: string;
  user: {
    name: string | null;
    bio: string | null;
    urls: JsonValue[];
    image: string | null;
    id: string;
    email: string | null;
    username: string | null;
    roles: UserType[];
    dateJoined: Date;
    accounts: {
      provider: string | null;
    }[];
  };
}

const NewUserSlider: FC<NewUserSliderProps> = ({ className, user }) => {
  // SWIPER
  const [swiperReachEnd, setSwiperReachEnd] = useState(false);
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(1);

  // SWIPER NAV REFS
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={cn("space-y-4 ", className)}>
      <Swiper
        modules={[Pagination, Navigation, A11y]}
        pagination={{
          type: "progressbar",
        }}
        a11y={{ enabled: true }} // for screen readers
        onSlideChange={(swiper) => {
          setSwiperActiveIndex(swiper.activeIndex + 1);
          setSwiperReachEnd(swiper.isEnd);
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;

          navigation.prevEl = navigationPrevRef.current;
          navigation.nextEl = navigationNextRef.current;
        }}
        allowTouchMove={false}
        className="border rounded-xl"
      >
        <Label className="absolute text-muted-foreground right-4 top-4 z-50">
          {swiperActiveIndex}/4
        </Label>
        {/* Slide 1 */}
        <SwiperSlide className="text-center">
          <Card className="border-none shadow-none">
            <CardHeader>
              <CardTitle>Complete your profile</CardTitle>
              <CardDescription>
                Personalize your Isked journey with a complete profile.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-left grid gap-6">
              <Slide1Form user={user} />
            </CardContent>
            <Separator />
          </Card>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide className="text-center">
          <Card className="border-none  shadow-none">
            <CardHeader>
              <CardTitle>Pick Your Role</CardTitle>
              <CardDescription>
                Select the user role that suits you best.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-left grid gap-6">
              {/* <Slide2Form user={user} /> */}
            </CardContent>
          </Card>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide className="text-center"></SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide className="text-center items-center flex"></SwiperSlide>
        {/* Nav Buttons */}
        <div className="flex justify-between space-x-6 p-6">
          <Button variant={"ghost"} ref={navigationPrevRef}>
            <ArrowLeftIcon className="w-6 h-6 mr-2" />
            Back
          </Button>
          <Button
            variant={"ghost"}
            ref={navigationNextRef}
            className={`w-full sm:w-auto justify-end ${
              swiperReachEnd ? "hidden" : ""
            }`}
          >
            Continue
            <ArrowRightIcon className="w-6 h-6 ml-2" />
          </Button>
          <Button
            disabled={!swiperReachEnd}
            className={`w-full md:w-[50%] ${!swiperReachEnd ? "hidden" : ""}`}
          >
            Finish
          </Button>
        </div>
      </Swiper>
    </div>
  );
};

export default NewUserSlider;
