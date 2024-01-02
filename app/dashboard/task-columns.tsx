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
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Request = {
    id: string
    room: string
    location: string
    title: string
    description: string
    img_url: string
    priority: string
    status: string
    email: string
    created_at: string
  }
 
export const taskColumns: ColumnDef<Request>[] = [

  {
    accessorKey: "email",
    header: "Email",
  },
  
  {
    accessorKey: "room",
    header: "Room",
    cell: ({ row }) => {

      return (
        <div className="flex gap-2">
          <Badge className="flex-shrink-0" variant="outline">R {row.getValue("room")}</Badge>
          <Badge className="hidden flex-shrink-0 lg:block" variant="outline">{row.original.location}</Badge>
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
          <span className="max-w-[200px] lg:max-w-[300px] truncate font-light">
            {row.getValue("title")}
          </span>
        </div>
      )
    },
  },

  /*
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  */

  {
    accessorKey: "created_at",
    header: "",
    cell: ({ row }) => {

      return (
        <div className="text-xs">
          {row.getValue("created_at")}
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