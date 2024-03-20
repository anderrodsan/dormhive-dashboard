import EventList from "@/components/dashboard/events";
import { eventData } from "@/data/events";
import React from "react";

export default async function Events() {
  return (
    <div className="h-full">
      <EventList data={eventData} />
    </div>
  );
}
