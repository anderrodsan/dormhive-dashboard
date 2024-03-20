"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarCheck, CalendarClock, Check, Heart, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export default function EventItem(props: any) {
  const event = props.data;

  //*** Format the date to display "02 Jan"
  const date = new Date(event.date);
  const day = date.getDate();
  // Array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];

  const router = useRouter();

  function openEvent(event: string) {
    console.log(event);

    router.push("/events/" + event);
  }

  return (
    <Card
      className={`relative w-full hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer`}
      onClick={() => openEvent(event.id)}
    >
      <div className="relative rounded-t-md h-[130px] w-full overflow-hidden">
        <Image
          alt="EventImage"
          src={event?.image}
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex gap-2 items-center p-2">
        <div className="flex-1 flex-col justify-start">
          <div className="flex gap-3 items-center">
            <p className="font-bold whitespace-nowrap truncate">{event.name}</p>
            {event?.status == "going" && (
              <div className="absolute top-3 right-3 flex gap-2 items-center justify-center bg-blue-500 font-bold h-9 w-9 rounded-full text-white">
                <Check size={23} />
              </div>
            )}
            {event?.status == "interested" && (
              <div className="absolute top-3 right-3 flex gap-2 items-center justify-center bg-orange-600 font-bold h-9 w-9 rounded-full text-white">
                <Heart size={23} />
              </div>
            )}
          </div>
          <p className="font-medium text-slate-500 text-sm truncate">
            @{event.creator}
          </p>
        </div>
      </div>

      <div className="absolute left-3 top-3 bg-white dark:bg-black flex flex-col items-center justify-center w-[60px] h-[60px] rounded-md border font-bold">
        <p className="text-xl">{day}</p>
        <p>{month}</p>
      </div>
    </Card>
  );
}
