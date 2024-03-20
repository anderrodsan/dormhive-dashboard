"use client";

import React, { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "../ui/toggle-mode";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LogOut, User, CreditCard, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SidebarSheet from "./SibeBarPhone";
import { useUser } from "@/lib/store/user";
import { HeaderTitle } from "../Header";
import Image from "next/image";
import Logo from "@/app/logo.png";

export default function Navbar() {
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);

  const handleLogout = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();
    setUser(null);

    return redirect("/login");
  };

  return (
    <div className="sticky top-0w-full flex flex-row justify-between lg:justify-end items-center gap-5 px-5 py-3 border-b bg-white dark:bg-black">
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger className="py-2">
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"} className="h-full w-[200px]">
            <SidebarSheet profile={user} />
          </SheetContent>
        </Sheet>
      </div>
      <div className="lg:hidden">
        <HeaderTitle />
      </div>

      <Link href="/" className="md:hidden h-12 w-12 p-2">
        <Image
          alt="DormHive"
          src={"/logo.png"}
          width={100}
          height={100}
          style={{ width: "100%", height: "100%" }} // optional
        />
      </Link>

      <div className="hidden md:flex flex-row items-center gap-5">
        <ModeToggle />

        {/* Profile and options */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex flex-row items-center gap-3">
              <Avatar>
                <AvatarImage src="https://www.svgrepo.com/show/70698/avatar.svg" />
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
            <button onClick={handleLogout} className="w-full cursor-pointer">
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
