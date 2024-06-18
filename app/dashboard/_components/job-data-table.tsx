"use client";

import { JobPost, data } from "@/data/jobDB";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import * as React from "react";
import JobDropdownMenu from "./job-dropdown";
import { ColumnDD } from "@/components/dashboard/tableColumnDD";
import { FilterSearch } from "@/components/dashboard/tableFilter-search";
import TableData from "@/components/dashboard/tableData";
import { TablePagination } from "@/components/dashboard/tablePagination";



export const columns: ColumnDef<JobPost>[] = [
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
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
        accessorKey: "Job_Title",
        header: "Job Title",
        cell: ({ row }) => <div className="lowercase">{row.getValue("Job_Title")}</div>,
      },
      {
        accessorKey: "Company_Name",
        header: "Company Name",
        cell: ({ row }) => <div className="lowercase">{row.getValue("Company_Name")}</div>,
      },
      {
        accessorKey: "date_posted",
        header: "Date Posted",
        cell: ({ row }) => <div className="lowercase">{row.getValue("date_posted")}</div>,
      },
      {
        accessorKey: "Source",
        header: "Source",
        cell: ({ row }) => <div className="capitalize">{row.getValue("Source")}</div>,
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const job: JobPost = row.original;
          return (
            <JobDropdownMenu job={job} />
          );
        },
    },
];

export function JobDataTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
    )
    const [columnVisibility, setColumnVisibility] =
      React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
  
    const table = useReactTable({
      data,
      columns,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
      },
    })

    const router = useRouter();

    const addNewJobBtn = () => {
      router.push('/admin/job-add');
    }
  
    return (
      <div className="w-full p-8 mt-16">
        <div className="flex items-center py-4">
          <FilterSearch 
            placeholder="Filter Job Title..."
            table={table}
            columnName="Job_Title"
          />
          <ColumnDD table={table} />
        </div>
        <div className="flex items-center py-4">
          <FilterSearch 
            placeholder="Filter Company Names..."
            table={table}
            columnName="Company_Name"
          />
          <Button
            className="ml-auto"
            onClick={addNewJobBtn}
          >
            Add a New Job!
          </Button>
        </div>
        <div className="rounded-md border">
          <TableData table={table} />
        </div>
        <TablePagination table={table} />
      </div>
    )
  }