"use client";

import React from "react";
import InfoCard from "./InfoCard";
import { Card } from "@/components/ui/card";
import InfoDisplay from "./InfoDisplay";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookPlus, Pencil } from "lucide-react";
import Image from "next/image";
import { FacilitiesData } from "@/data/facilities";
import FacilityCard from "./FacilityCard";
import { infoData } from "@/data/info";
import InfoItem from "./InfoItem";

export default function InfoPage(props: any) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full pb-5">
      <div className="w-full col-span-1 space-y-5">
        <Card className="p-5 space-y-3">
          <CardTitle title="Basic Information" />

          <div className="relative h-24 w-24">
            <Image
              alt="DormHive"
              src={"/logo.png"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-primary">Name</p>
              <p className="font-bold text-lg">CPH Kollegiet</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-primary">Description</p>
              <p className="line-clamp-2">
                Welcome to CPH Kollegiet! This is the community design for you
                to communicate with each other.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-5 space-y-3">
          <CardTitle title="Capacity" />
          <div className="flex flex-row gap-3">
            <Card className="w-[100px] h-[100px] flex flex-col items-center justify-center gap-2">
              <p className="text-sm font-semibold text-primary">Tenants</p>
              <p className="font-semibold text-xl">456</p>
            </Card>
            <Card className="p-5 w-[100px] h-[100px] flex flex-col items-center justify-center gap-2">
              <p className="text-sm font-semibold text-primary">Rooms</p>
              <p className="font-semibold text-xl">400</p>
            </Card>
          </div>
        </Card>
      </div>

      <div className="lg:col-span-2 space-y-5">
        <Card className="p-5 space-y-3">
          <CardTitle title={`Facilities (${FacilitiesData.length})`} />
          <div className="flex gap-2 overflow-hidden">
            {FacilitiesData.map((facility) => (
              <FacilityCard key={facility.id} data={facility} />
            ))}
          </div>
        </Card>
        <Card className="p-5 space-y-3">
          <CardTitle title="Q&A" />
          {infoData.slice(0, 3).map((info, idx) => (
            <InfoItem key={idx} data={info} />
          ))}
          ...
        </Card>
      </div>
    </div>
  );
}

//Card Title
const CardTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between items-center">
      <p>{title}</p>
      <Pencil size={20} />
    </div>
  );
};
