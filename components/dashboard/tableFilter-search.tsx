import { Input } from "../ui/input";

interface FilterSearchProps<T extends Record<string, any>> {
    placeholder: string;
    table: any;
    columnName: string;
  }

export const FilterSearch = <T extends Record<string, any>>({ placeholder, table, columnName }: FilterSearchProps<T>) => {
    return (
        <Input
            placeholder={placeholder}
            value={(table.getColumn(columnName)?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn(columnName)?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
    );
}