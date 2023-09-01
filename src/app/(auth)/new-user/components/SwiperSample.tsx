"use client";

import { FC, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface SwiperSampleProps {
  className?: String;
}

const schools = [
  { id: "1", name: "Cvsu", location: "Carmona" },
  { id: "2", name: "Batsu", location: "Alangilan" },
  { id: "3", name: "Bsu", location: "Bacor" },
  { id: "4", name: "X", location: "Alangilan" },
  { id: "5", name: "Y", location: "Bacor" },
  { id: "6", name: "Z", location: "Alangilan" },
  { id: "7", name: "A", location: "Bacor" },
  { id: "8", name: "B", location: "Alangilan" },
  { id: "9", name: "C", location: "Bacor" },
  { id: "10", name: "D", location: "Alangilan" },
  { id: "11", name: "E", location: "Bacor" },
  { id: "12", name: "F", location: "Alangilan" },
  { id: "13", name: "G", location: "Bacor" },
];

const SwiperSample: FC<SwiperSampleProps> = ({ className }) => {
  const [swiperReachEnd, setSwiperReachEnd] = useState(false);
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(1);
  const [selectedSchool, setSelectedSchool] = useState(schools[0]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={cn("space-y-4", className)}>
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
        className="border rounded-xl w-full"
      >
        <Label className="absolute text-muted-foreground right-4 top-4 z-50">
          {swiperActiveIndex}/5
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
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="number">Bio</Label>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                />
              </div>
            </CardContent>
            <CardFooter></CardFooter>
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
            <CardContent className="grid gap-6">
              {/* ROLE */}
              <RadioGroup
                defaultValue="student"
                className="grid grid-cols-3 gap-4"
              >
                <Label
                  htmlFor="student"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <RadioGroupItem
                    value="student"
                    id="student"
                    className="sr-only"
                  />
                  <Icons.student className="text-primary mb-3 h-6 w-6" />
                  Student
                </Label>
                <Label
                  htmlFor="instructor"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <RadioGroupItem
                    value="instructor"
                    id="instructor"
                    className="sr-only"
                  />
                  <Icons.instructor className="text-primary mb-3 h-6 w-6" />
                  Educator
                </Label>
                <Label
                  htmlFor="admin"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <RadioGroupItem
                    value="admin"
                    id="admin"
                    className="sr-only"
                  />
                  <Icons.admin className="text-primary mb-3 h-6 w-6" />
                  Admin
                </Label>
              </RadioGroup>
            </CardContent>
          </Card>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide className="text-center">
          <Card className="border-none shadow-none">
            <CardHeader>
              <CardTitle>Choose Your School</CardTitle>
              <CardDescription>
                Select from the list of available schools in Isked below.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              {/* SCHOOLS LIST */}
              <ScrollArea className="h-52 rounded-lg border">
                {schools.map((school) => (
                  <div key={school.id} className="text-sm flex">
                    <Button
                      variant={"ghost"}
                      className={`w-full rounded-none ${
                        selectedSchool.id === school.id ? "bg-muted" : ""
                      }`}
                      onClick={() => setSelectedSchool(school)}
                    >
                      {school.name}
                    </Button>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="text-center items-center flex">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="text-center items-center flex">
          Slide 5
        </SwiperSlide>
        <div className="flex justify-between space-x-6 px-6 pb-6 pt-2">
          <Button variant={"ghost"} ref={navigationPrevRef}>
            <ArrowLeftIcon className="w-6 h-6 mr-2" />
            Back
          </Button>
          <Button
            // variant={"ghost"}
            ref={navigationNextRef}
            className={`w-full sm:w-auto ${swiperReachEnd ? "hidden" : ""}`}
          >
            Continue
            {/* <ArrowRightIcon className="w-6 h-6 ml-2" /> */}
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

export default SwiperSample;
