"use client";

import React from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

// ShadcnUI components

//React Icons
import {
  MdSpaceDashboard,
  MdManageAccounts,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { redirect, usePathname } from "next/navigation";
import {
  ClipboardList,
  Users,
  LayoutDashboard,
  User,
  CreditCard,
  LogOut,
  CalendarDays,
  BellDot,
  Mail,
  BookText,
  Settings,
} from "lucide-react";
import { SheetClose } from "../ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "../ui/toggle-mode";
import { buttonVariants } from "../ui/button";

interface Profile {
  username: string;
  avatar_url: string;
}

export default function SidebarSheet({ profile }: { profile: Profile }) {
  const pathname = usePathname();

  // Sign Out function
  const signOut = async (formData: FormData) => {
    const supabase = createClient();

    console.log("logging out");
    await supabase.auth.signOut();
    return redirect("/login");
  };

  const menuItems = [
    {
      path: "/dashboard",
      icon: <LayoutDashboard fontSize={20} />,
      label: "Dashboard",
    },
    {
      path: "/dashboard/tasks",
      icon: <Mail fontSize={20} />,
      label: "Tasks",
    },
    {
      path: "/dashboard/groups",
      icon: <Users fontSize={20} />,
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

  return (
    <div className="flex flex-col justify-between h-full">
      <div className=" text-slate-700 dark:text-slate-300">
        <ul className="flex flex-col w-full">
          {menuItems.map((menuItem, index) => (
            <li key={index} className="flex flex-row justify-start group">
              <div
                className={`h-full w-2 ${
                  pathname === menuItem.path
                    ? "bg-slate-500"
                    : "group-hover:bg-slate-500"
                }`}
              />
              <SheetClose asChild>
                <Link
                  href={menuItem.path}
                  className={`flex flex-row flex-grow items-center gap-3 py-5 px-5 ${
                    pathname === menuItem.path
                      ? "bg-slate-100 dark:bg-gray-900"
                      : "group-hover:bg-slate-100 dark:hover:bg-gray-900"
                  }`}
                >
                  {menuItem.icon}
                  <p className="text-sm">{menuItem.label}</p>
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center gap-5">
        <ModeToggle />

        {/* Profile and options */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex flex-row items-center gap-3">
              <Avatar>
                <AvatarImage
                  src={"https://www.svgrepo.com/show/70698/avatar.svg"}
                />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
              <p className="text-sm">christian</p>
              <MdKeyboardArrowDown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Subscription</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <form action={signOut}>
              <button className="w-full cursor-pointer">
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </button>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
