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

import { DataTableToolbar } from "./data-table-toolbar"
import { useRouter } from "next/navigation"
import { DataTablePagination } from "./data-table-pagination"
import useScreenSize from "@/hooks/useScreenSize"
import useCustomTable from "./table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  
  const table = useCustomTable({ data, columns });

  const router = useRouter()


  function openTask(rowId, colId) {
    console.log(rowId)
    console.log(colId)
    
    if (colId !== "select") {
      router.push('/dashboard/tasks/' + rowId)
    }
    
  }

  /*
  const screenSize = useScreenSize()

  React.useEffect(() => {
    const emailColumn = table.getColumn("email");

    if (screenSize.width < 900) {
      emailColumn?.toggleVisibility(false);
    } else {
      emailColumn?.toggleVisibility(true);
    }
  }, [screenSize.width, table]);
  */

  return (
    <div className="flex flex-col gap-4">
      <DataTableToolbar table={table} />   
      <div className="flex-1 rounded-md border bg-white dark:bg-black overflow-hidden">
        <div>
          <Table className="relative">
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
                    className={row.original.status == 'todo' ? 'bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 ' : ''}
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell 
                        
                        key={cell.id} 
                        onClick={() => openTask(row.original.id, cell.column.id)}
                      >
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
        </div>
      </div>
      <DataTablePagination table={table} />
    </div>
    
  )
}
