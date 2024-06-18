import React from "react";
import { useRouter } from "next/navigation";
import TableDDMenu from "@/components/dashboard/tableDD-menu";
import { JobPost } from "@/data/jobDB";

interface Props {
    job: JobPost;
}

const JobDropdownMenu: React.FC<Props> = ({ job }) => {
    const router = useRouter();

    const openJobLinkInNewTab = () => {
        window.open(job.Link_for_application, '_blank');
    };

    const viewJobPost = () => {
        if (job.id) {
            router.push(`/admin/job-data?id=${job.id}`);
        }
    }

    const menuItems = [
        { label: "Job Link", onClick: openJobLinkInNewTab },
        { label: "View Job Post", onClick: viewJobPost }, // Add your action for viewing job post
    ];

    return <TableDDMenu menuItems={menuItems} />;
};

export default JobDropdownMenu;