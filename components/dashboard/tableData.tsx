import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import {
  flexRender,
  HeaderGroup,
  Row,
  Cell,
  Column,
} from "@tanstack/react-table";

interface TableDataProps<T extends Record<string, any>> {
  table: any;
}

const TableData = <T extends Record<string, any>>({
  table,
}: TableDataProps<T>) => {
  const columns = table?.getAllColumns() ?? [];

  return (
    <Table className="border-separate border-spacing-y-4 w-full">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup: HeaderGroup<any>) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} className="text-sky-700">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row: Row<any>, rowIndex: number) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
              className="border shadow-md border-neutral-700 rounded-[10px]"
            >
              {row
                .getVisibleCells()
                .map((cell: Cell<any, any>, cellIndex: number) => {
                  const isFirst = cellIndex === 0;
                  const isLast = cellIndex === row.getVisibleCells().length - 1;
                  return (
                    <TableCell
                      key={cell.id}
                      className={`relative  ${
                        isFirst
                          ? "rounded-tl-[10px] rounded-bl-[10px] border-y border-l border-neutral-700"
                          : "border-y border-neutral-700"
                      } ${
                        isLast
                          ? "rounded-tr-[10px] rounded-br-[10px] border-y border-r border-neutral-700"
                          : "border-y border-neutral-700"
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                      {!isLast && (
                        <div className="absolute h-[80%] right-0 top-0 bottom-0 border border-neutral-700 mt-2 w-[1px]" />
                      )}
                    </TableCell>
                  );
                })}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={columns.length}
              className="h-24 text-center border border-black"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableData;
