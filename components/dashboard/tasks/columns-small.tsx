"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { statuses, priorities, Request } from "@/lib/types/Tasks";
import { formatDate } from "@/hooks/useDate";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columnsSmall: ColumnDef<Request>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
  },

  {
    accessorKey: "email",
    header: ({ table }) => <p>Title</p>,
    cell: ({ row }) => {
      return (
        <div className="flex flex-row justify-between items-center gap-2">
          <div className="flex flex-row gap-4 items-center">
            <Avatar>
              <AvatarImage src={row.original.profile?.avatar_url} />
              <AvatarFallback>
                {row.original.profile.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 font-light truncate">
              <div className="flex flex-row items-center gap-2 ">
                <p className="truncate max-w-[200px] md:max-w-none font-bold">
                  @{row.original.profile?.username}
                </p>
                <Badge className="flex-shrink-0" variant="outline">
                  R {row.original.room}
                </Badge>
              </div>
              <div className="flex flex-grow space-x-2">
                <Badge className="flex-shrink-0" variant="outline">
                  {row.original.location}
                </Badge>
                <span className="truncate max-w-[150px] sm:max-w-[300px] font-light">
                  {row.original.title}
                </span>
              </div>
            </div>
          </div>

          <div className="text-xs">{formatDate(row.original.created_at)}</div>
        </div>
      );
    },
  },
];
