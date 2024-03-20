"use client";

import React from "react";

// lucide icons
import {
  Users,
  LayoutDashboard,
  Home,
  CalendarDays,
  BellDot,
  Mail,
  BookText,
  MessagesSquare,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import DateInfo from "@/hooks/useDate";

export default function Header() {
  const pathname = usePathname();

  const navigationItems = [
    {
      path: "/dashboard",
      icon: <LayoutDashboard fontSize={20} />,
      label: "Dashboard",
    },
    { path: "/dashboard/tasks", icon: <Mail fontSize={20} />, label: "Inbox" },
    { path: "/dashboard/users", icon: <Users fontSize={20} />, label: "Users" },
    {
      path: "/dashboard/groups",
      icon: <MessagesSquare fontSize={20} />,
      label: "Groups",
    },
    {
      path: "/dashboard/events",
      icon: <CalendarDays fontSize={20} />,
      label: "Events",
    },
    {
      path: "/dashboard/alerts",
      icon: <BellDot fontSize={20} />,
      label: "Alerts",
    },
    {
      path: "/dashboard/info",
      icon: <Settings fontSize={20} />,
      label: "Settings",
    },
  ];

  const item = navigationItems.find(({ path }) => path === pathname);

  return (
    <div className="hidden lg:flex flex-row justify-between pt-5 px-5 pb-3">
      <div className="flex flex-row items-center justify-start gap-2">
        {item?.icon}
        <h1 className="text-lg font-bold">{item?.label}</h1>
      </div>
      <DateInfo />
    </div>
  );
}

export function HeaderTitle() {
  const pathname = usePathname();

  const navigationItems = [
    {
      path: "/dashboard",
      icon: <LayoutDashboard fontSize={20} />,
      label: "Dashboard",
    },
    { path: "/dashboard/tasks", icon: <Mail fontSize={20} />, label: "Inbox" },
    { path: "/dashboard/users", icon: <Users fontSize={20} />, label: "Users" },
    {
      path: "/dashboard/groups",
      icon: <MessagesSquare fontSize={20} />,
      label: "Groups",
    },
    {
      path: "/dashboard/events",
      icon: <CalendarDays fontSize={20} />,
      label: "Events",
    },
    {
      path: "/dashboard/alerts",
      icon: <BellDot fontSize={20} />,
      label: "Alerts",
    },
    {
      path: "/dashboard/info",
      icon: <Settings fontSize={20} />,
      label: "Settings",
    },
  ];

  const item = navigationItems.find(({ path }) => path === pathname);

  return (
    <div className="flex flex-row items-center justify-start gap-2">
      {item?.icon}
      <h1 className="text-lg font-bold">{item?.label}</h1>
    </div>
  );
}
