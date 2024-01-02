"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { statuses, priorities, Request } from "@/lib/types/Tasks"
import { formatDate } from "@/hooks/useDate"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

 
export const columns: ColumnDef<Request>[] = [
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
    header: ({ table }) => (
      <p>User</p>
    ),
    cell: ({ row }) => {

      return (
        <div className="flex flex-row gap-3 items-center w-auto">
          <Avatar className="hidden md:block">
              <AvatarImage src={row.original.profile?.avatar_url}/>
              <AvatarFallback>{row.original.profile.email?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 font-light truncate max-w-[100px] md:max-w-none">
            <p className="">{row.original.profile?.email}</p>
            <div className="flex flex-row items-center gap-2">
              {/*<p className="font-semibold">@{row.original.profile?.username}</p>*/}
              <Badge className="flex-shrink-0" variant="outline">R {row.original.room}</Badge>
            </div>
            
          </div>
        </div>
      )
    },
  },
  

  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {

      return (
        <div className="flex space-x-2">
          <Badge className="flex-shrink-0" variant="outline">{row.original.location}</Badge>
          <span className="max-w-[200px] lg:max-w-[300px] truncate font-light">
            {row.getValue("title")}
          </span>
        </div>
      )
    },
  },

  {
    accessorKey: "status",
    header: ({ table }) => (
      <p className="hidden xl:block">Status</p>
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex gap-2 justify-center xl:justify-start items-center truncate">
          {status.icon && (
            <status.icon className="h-4 w-4 text-muted-foreground" />
          )}
          <span className="hidden xl:block">{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },




  },
  {
    accessorKey: "priority",
    header: ({ table }) => (
      <p className="hidden xl:block">Priority</p>
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      )

      if (!priority) {
        return null
      }

      return (
        <div className="flex gap-2 justify-center xl:justify-start items-center">
          {priority.icon && (
            <priority.icon className="h-4 w-4 text-muted-foreground" />
          )}
          <span className="hidden xl:block">{priority.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },

  {
    accessorKey: "created_at",
    header: "",
    cell: ({ row }) => {

      return (
        <div className="text-xs">
          {formatDate(row.getValue("created_at"))}
        </div>
      )
    },
  },



  {
    id: "actions",
    cell: ({ row }) => {
      const request = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Mark As</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View user</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  
]