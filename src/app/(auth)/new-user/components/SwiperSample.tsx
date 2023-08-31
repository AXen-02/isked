"use client";

import { FC, ReactElement, ReactNode } from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, A11y } from "swiper/modules";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SwiperSampleProps {}

const SwiperSample: FC<SwiperSampleProps> = ({}) => {
  const [onReachEnd, setOnReachEnd] = useState(false);

  return (
    <div className="space-y-4">
      <Swiper
        modules={[Pagination, Navigation, A11y]}
        pagination={{
          type: "progressbar",
        }}
        navigation={{
          hideOnClick: true,
        }}
        a11y={{ enabled: true }} // for screen readers
        onSlideChange={(swiper) => {
          const isOnLastSlide = swiper.activeIndex === 3;
          setOnReachEnd(isOnLastSlide);
        }}
        className="border rounded-lg w-[65vw] md:w-auto"
      >
        <SwiperSlide className="text-center items-center flex">
          <Card>
            <CardHeader>
              <CardTitle>Pick Your Role</CardTitle>
              <CardDescription>
                Select the user role that suits you best.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <RadioGroup
                defaultValue="card"
                className="grid grid-cols-3 gap-4"
              >
                <Label
                  htmlFor="card"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <RadioGroupItem value="card" id="card" className="sr-only" />
                  <Icons.student className="mb-3 h-6 w-6" />
                  Student
                </Label>
                <Label
                  htmlFor="paypal"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <RadioGroupItem
                    value="paypal"
                    id="paypal"
                    className="sr-only"
                  />
                  <Icons.instructor className="mb-3 h-6 w-6" />
                  Educator
                </Label>
                <Label
                  htmlFor="apple"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <RadioGroupItem
                    value="apple"
                    id="apple"
                    className="sr-only"
                  />
                  <Icons.admin className="mb-3 h-6 w-6" />
                  Admin
                </Label>
              </RadioGroup>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Continue</Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="text-center items-center flex">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="text-center items-center flex">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="text-center items-center flex">
          Slide 5
        </SwiperSlide>
      </Swiper>
      <Button disabled={!onReachEnd} className="w-full md:w-[50%]">
        Finish
      </Button>
    </div>
  );
};

export default SwiperSample;
