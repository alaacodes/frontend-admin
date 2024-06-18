"use client";

import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";
import { ColumnDD } from "@/components/dashboard/tableColumnDD";
import { FilterSearch } from "@/components/dashboard/tableFilter-search";
import TableData from "@/components/dashboard/tableData";
import { TablePagination } from "@/components/dashboard/tablePagination";
import { CandidatePost, filterOptions } from "@/data/candidateInfo";
import { columns } from "./candidate_column";
import { Combobox } from "@/components/ui/combobox";

export function CandidateDataTable({ data }: { data: any }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      // Email: true,
      // Name: true,
      // PhoneNumber: true,
      // Nationality: true,
      // QualityRating: false,
      // skills: false,
      // TechStack: true,
      // FrameWork: false,
      // yearOfExp: false,
      // LanguagesProficiency: true,
      // CurrentSalaryEUR: false,
      // ExpectedSalaryEUR: false,
      // displaySalaryEUR: false,
      // Country: true,
      // City: false,
      // Industry: false,
      // type: true,
      // fullProgram: false,
      // readyToStart: false,
      // BlueCard: false,
      // Degree: false,
      // Profession: true,

      CandidateId: true,
      Profession: true,
      ExpectedSalaryEUR: true,
      yearOfExp: false,
      LanguagesProficiency: true,
      TechStack: true,
    });
  const [rowSelection, setRowSelection] = React.useState({});

  const [selectedColumn, setSelectedColumn] = useState<string>("displayedid");

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
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <p className="text-lg font-normal">
          {table.getFilteredRowModel().rows.length} Candidates
        </p>

        <div className="flex items-center justify-center gap-x-4">
          <p className="text-lg w-full">Filter Type</p>

          <Combobox
            options={filterOptions}
            value={selectedColumn}
            onChange={(selectedColumn) => setSelectedColumn(selectedColumn)}
          />

          <FilterSearch
            placeholder="Filter..."
            table={table}
            columnName={selectedColumn}
          />
        </div>
      </div>

      <div className="mt-5">
        <TableData table={table} />
      </div>

      <div className="flex justify-end space-x-2 mt-5">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
