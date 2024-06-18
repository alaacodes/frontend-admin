// import { GET } from "@/app/api/test/route";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AdminPage = async () => {
  return (
    <div className="p-6">
      <Link href="/admin/create">
        <Button>New Course</Button>
      </Link>

      <div></div>
    </div>
  );
};

export default AdminPage;
