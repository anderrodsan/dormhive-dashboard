"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { ChevronDown, ChevronRight, Dot, Edit, MoreHorizontal, PenSquare, PlusCircle, Trash, User, UserPlus } from "lucide-react"
 
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
import { UUID } from "crypto"
import EditGroup from "./EditGroup"
import CreateGroup from "./CreateGroup"
import { Group, groupIcons } from "@/lib/types/Groups"
import DeleteGroup from "./DeleteGroup"
import EditRooms from "./EditRooms"
import EditMembers from "./EditMembers"
 
export const groupColumns: ColumnDef<Group>[] = [


  {
    accessorKey: 'name',
    header: ({ table }) => (
      <div className="flex flex-row items-center gap-2">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            className="mr-4"
        />
        <button
          {...{
            onClick: table.getToggleAllRowsExpandedHandler(),
          }}
        >
          {table.getIsAllRowsExpanded() ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
        </button> 
        <p>Name</p>
      </div>
    ),
    cell: ({ row }) => {

      const group = groupIcons.find(
        (group) => group.value === row.original.icons
      )

      if (!group) {
        return null
      }

      return(
        <div className="flex flex-row items-center gap-2 w-[200px]" onClick={() => console.log(row.original.name)}>
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="mr-4"
          />
          <div className="flex flex-row items-center gap-2"
            style={{
              paddingLeft: `${row.depth * 2}rem`,
            }}
          >
            {row.getCanExpand() ? (
              <button
                {...{
                  onClick: row.getToggleExpandedHandler(),
                  style: { cursor: 'pointer' },
                }}
              >
                {row.getIsExpanded() ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
              </button>
            ) : (
                <Dot size={16} strokeWidth={1}/>
            )}
            {group.icon && (
              <group.icon className="h-4 w-4 text-muted-foreground" />
            )}
            <p className={"truncate" }>{row.getValue("name")}</p>
            <div className="flex flex-row gap-2 items-center text-white dark:text-black group-hover:text-slate-700 dark:group-hover:text-slate-300">
              <CreateGroup title={""} size={16} dormID={row.original.dormid} parentID={row.original.id}/>
              <EditGroup group={row.original}/>
              <DeleteGroup group={row.original} />
            </div>
          </div>
        </div>  
      )

    },
  },
  
  {
    accessorKey: "rooms",
    header: ({ table }) => (
      <p className="text-left">Members</p>
    ),

    cell: ({ row }) => (
      <div className="flex flex-row items-center justify-start gap-2">
        <EditMembers group={row.original} />
        <EditRooms group={row.original} />
      </div>
    ),

  },

  {
    id: "actions",
    cell: ({ row }) => {
      const request = row.original
 
      return (
        <div className="text-right pr-5">
          <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem><PlusCircle size={20} className="pr-2"/> Add subgroup</DropdownMenuItem>
            <DropdownMenuItem className="text-yellow-500"><Edit size={20} className="pr-2"/> Edit Group</DropdownMenuItem>
            <DropdownMenuItem className="text-blue-500"><UserPlus size={20} className="pr-2"/> Add Members</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500"><Trash size={20} className="pr-2"/> Delete Group</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
        
      )
    },
  },
  
]