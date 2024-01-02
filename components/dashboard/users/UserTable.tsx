"use client"

import * as React from "react"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ListFilter, PenSquare, Pencil, Trash2, UserPlus } from "lucide-react"
import { Select, SelectContent, SelectItem } from "@/components/ui/select"
import { SelectTrigger, SelectValue } from "@radix-ui/react-select"
import AddUser from "./AddUser"
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuSubContent, 
  DropdownMenuItem 
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function UserTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })  

  const [filterColumn, setFilterColumn] = React.useState("room");



  return (
    <div className="flex flex-col gap-4">

      {/* Filtering and user creation*/}
      <div className="flex flex-row justify-between items-center gap-4">
        <Select
          value={`${filterColumn}`}
          onValueChange={(value) => {
            setFilterColumn(value)
            table.getColumn(`${filterColumn}`)?.setFilterValue("")
          }}
        >
          <SelectTrigger className="w-[80px]">
            <Button size={"sm"} variant="outline">
              <ListFilter size={16} className="mr-2"/>
              <SelectValue placeholder="Room" />
            </Button>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='room'>Room</SelectItem>
            <SelectItem value='email'>Email</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder={"Filter by " + `${filterColumn}` + "..."}
          value={(table.getColumn(`${filterColumn}`)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(`${filterColumn}`)?.setFilterValue(event.target.value)
          }
          className="h-8"
        />
        <AddUser /> 
      </div>

      {/* Show Actions for selected items */}
      {table.getFilteredSelectedRowModel().rows.length > 0 && (
        <div className="flex flex-row justify-between items-center">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} row(s) selected.
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto flex h-8"
                >
                  <PenSquare className="mr-2 h-4 w-4" />
                  Actions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Pencil className="mr-2" size={16}/> Edit</DropdownMenuItem>
                <DropdownMenuItem><Trash2 className="mr-2" size={16}/> Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
      
      {/* User table */}
      <div className="flex-1 rounded-md border bg-white dark:bg-black h-full">
        <ScrollArea className="overflow-y-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
        
      </div>
    </div>
    
  )
}
