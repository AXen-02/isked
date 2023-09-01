"use client";

import { FC, useCallback, useRef, useState } from "react";
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
import { cn } from "@/lib/utils";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Textarea } from "@/components/ui/textarea";
import { NavigationOptions } from "swiper/types";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CommandDialogDemo from "./CommandDialogDemo";

interface SwiperSampleProps {
  className?: String;
}

const SwiperSample: FC<SwiperSampleProps> = ({ className }) => {
  const [swiperReachEnd, setSwiperReachEnd] = useState(false);
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(1);

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
              {/* SCHOOL */}
              <div className="grid gap-2">
                <Label htmlFor="name">Select your school</Label>
                {/* <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="justify-between">
                      None selected..{" "}
                      <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0" align="center">
                    <Command>
                      <CommandInput placeholder="Select your school..." />
                      <CommandList>
                        <CommandEmpty>No school found.</CommandEmpty>
                        <CommandGroup>
                          <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                            <p>Cavite State University - Carmona</p>
                            <p className="text-sm text-muted-foreground">
                              Carmona, Cavite
                            </p>
                          </CommandItem>
                          <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                            <p>Developer</p>
                            <p className="text-sm text-muted-foreground">
                              Can view, comment and edit.
                            </p>
                          </CommandItem>
                          <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                            <p>Billing</p>
                            <p className="text-sm text-muted-foreground">
                              Can view, comment and manage billing.
                            </p>
                          </CommandItem>
                          <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                            <p>Owner</p>
                            <p className="text-sm text-muted-foreground">
                              Admin-level access to all resources.
                            </p>
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover> */}
              </div>
              {/* <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="month">Expires</Label>
                  <Select>
                    <SelectTrigger id="month">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">January</SelectItem>
                      <SelectItem value="2">February</SelectItem>
                      <SelectItem value="3">March</SelectItem>
                      <SelectItem value="4">April</SelectItem>
                      <SelectItem value="5">May</SelectItem>
                      <SelectItem value="6">June</SelectItem>
                      <SelectItem value="7">July</SelectItem>
                      <SelectItem value="8">August</SelectItem>
                      <SelectItem value="9">September</SelectItem>
                      <SelectItem value="10">October</SelectItem>
                      <SelectItem value="11">November</SelectItem>
                      <SelectItem value="12">December</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="year">Year</Label>
                  <Select>
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem
                          key={i}
                          value={`${new Date().getFullYear() + i}`}
                        >
                          {new Date().getFullYear() + i}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="CVC" />
                </div>
              </div> */}
            </CardContent>
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
