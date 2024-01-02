"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { DataTableViewOptions } from "./data-table-view-options"

import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { priorities, statuses } from "@/lib/types/Tasks"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  // Use selectedRowIds state for performing actions like deletion
  const handleDeleteSelected = () => {
    // Perform deletion or any other action using the selectedRowIds state
    console.log("Selected rows to delete:", table.getSelectedRowModel().flatRows);

    // Get the selected rows and map the object to get an array of IDs
    const selectedIds = table.getSelectedRowModel().flatRows.map(row => row.original.id);

  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-full md:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}

        {table.getSelectedRowModel().flatRows.length > 0 && (
          <form action={handleDeleteSelected}>
            <button className="pl-5 text-sm">Delete Selected</button>
          </form>
        )}
      </div>
      <div className="hidden md:block">
        <DataTableViewOptions table={table} />
      </div>
      
    </div>
  )
}