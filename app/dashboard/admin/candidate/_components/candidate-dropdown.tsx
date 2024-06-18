import React from "react";
import { useRouter } from "next/navigation";
import TableDDMenu from "@/components/dashboard/tableDD-menu";
import { CandidatePost } from "@/data/candidateInfo";

interface CandidateDDMenuProps {
  post: CandidatePost;
}

const CandidateDDMenu: React.FC<CandidateDDMenuProps> = ({ post }) => {
  const router = useRouter();

  const viewPost = () => {
    if (post.id) {
      router.push(`/profile/${post.id}/edit`);
    }
  };

  const menuItems = [
    { label: "View Profile", onClick: viewPost }, // Add your action for viewing job post
  ];

  return <TableDDMenu menuItems={menuItems} />;
};

export default CandidateDDMenu;
