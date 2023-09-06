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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { UserType } from "@prisma/client";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { NavigationOptions } from "swiper/types";

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
  // SWIPER
  const [swiperReachEnd, setSwiperReachEnd] = useState(false);
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(1);

  // DATA
  const [selectedSchool, setSelectedSchool] = useState(schools[0]);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState<UserType>(UserType.STUDENT);

  // REFS
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
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="number">Bio</Label>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
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
            <CardContent className="text-left grid gap-6">
              {/* ROLE */}
              <Tabs
                defaultValue={UserType.STUDENT}
                className=""
                onValueChange={(v) => setRole(v as UserType)}
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value={UserType.STUDENT}>
                    <Label className="hidden sm:flex">Student</Label>
                    <Icons.student className="h-4 w-4 sm:hidden" />
                  </TabsTrigger>
                  <TabsTrigger value={UserType.INSTRUCTOR}>
                    <Label className="hidden sm:flex">Educator</Label>
                    <Icons.instructor className="h-4 w-4 sm:hidden" />
                  </TabsTrigger>
                  <TabsTrigger value={UserType.ADMINISTRATOR}>
                    <Label className="hidden sm:flex">Administrator</Label>
                    <Icons.admin className="h-4 w-4 sm:hidden" />
                  </TabsTrigger>
                </TabsList>
                <TabsContent value={UserType.STUDENT}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Create a Student Account</CardTitle>
                      <CardDescription>
                        Get started with Isked as a student. Begin your
                        educational adventure today.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="name">Major</Label>
                        <Input id="name" defaultValue="Pedro Duarte" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value={UserType.INSTRUCTOR}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Create an Educator Account</CardTitle>
                      <CardDescription>
                        Join Isked as an educator. Empower the future through
                        education.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="current">Expertise</Label>
                        <Input id="current" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">Title</Label>
                        <Input id="new" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save password</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value={UserType.ADMINISTRATOR}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Create an Administrator Account</CardTitle>
                      <CardDescription>
                        Take control with an administrator account. Manage your
                        institution effortlessly.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="current">Current password</Label>
                        <Input id="current" type="password" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">New password</Label>
                        <Input id="new" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save password</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
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
                  <div key={school.id} className="text-sm ">
                    <Button
                      variant={"ghost"}
                      className={`w-full rounded-none ${
                        selectedSchool.id === school.id ? "bg-muted" : ""
                      }`}
                      onClick={() => setSelectedSchool(school)}
                    >
                      <h4 className="text-sm font-medium leading-none">
                        {school.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        ({school.location})
                      </p>
                    </Button>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide className="text-center items-center flex">
          <p>Name: {name}</p>
          <p>Bio: {bio}</p>
          <p>Role: {role}</p>
          <p>School: {selectedSchool.name}</p>
        </SwiperSlide>
        {/* Nav Buttons */}
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
