"use client";

import { Card } from "@/components/ui/card";
import { Facility } from "@/data/facilities";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function FacilityCard(props: any) {
  const facility = props.data;

  const router = useRouter();

  function openCard(facility: string) {
    router.push("/facilities/" + facility);
  }

  return (
    <Card
      className="relative w-[200px] hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
      onClick={() => openCard(facility.id)}
    >
      <div className="relative rounded-t-md h-[100px] w-[200px] overflow-hidden">
        <Image
          alt="Facility"
          src={facility?.image[0]}
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-1 flex justify-between items-center p-2">
        <p className="font-bold whitespace-nowrap truncate text-sm">
          {facility.title}
        </p>
        <ChevronRight size={16} />
      </div>
    </Card>
  );
}
