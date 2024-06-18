import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { CandidatePost } from "@/data/candidateInfo";
import CandidateDDMenu from "./candidate-dropdown";

export const columns: ColumnDef<CandidatePost>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "displayedid",
    header: "Candidate ID",
    cell: ({ row }) => <div>{row.getValue("displayedid")}</div>,
    enableHiding: false,
  },
  {
    accessorKey: "Current_Job_Title",
    header: "Profession",
    cell: ({ row }) => <div>{row.getValue("Current_Job_Title")}</div>,
    enableHiding: false,
  },
  {
    accessorKey: "ExpectedSalaryEUR",
    header: "Salary Expectation/Annum [EUR]",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("ExpectedSalaryEUR")}</div>
    ),
  },
  {
    accessorKey: "Experience",
    header: "Experience",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("Experience")}</div>
    ),
  },
  {
    accessorKey: "GermanLanguage",
    header: "German Language",
    cell: ({ row }) => (
      <div>
        <img className="h-[35px]" src="/A00.jpg" alt="" />
      </div>
    ),
  },
  {
    accessorKey: "skills",
    header: "Tech Stack",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("skills")}</div>
    ),
  },
  {
    accessorKey: "Migration Readiness",
    header: "Migration Readiness",
    cell: ({ row }) => (
      <div className="flex">
        <img
          className="h-[30px] px-1 py-1"
          src="/ActiveMigration11.svg"
          alt=""
        />
        <img
          className="h-[30px] px-1 py-1"
          src="/PreparationJourney12.svg"
          alt=""
        />
        <img
          className="h-[30px] px-1 py-1"
          src="/BlueCardEligible12.svg"
          alt=""
        />
      </div>
    ),
  },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const post: CandidatePost = row.original;
  //     return <CandidateDDMenu post={post} />;
  //   },
  // },
];
