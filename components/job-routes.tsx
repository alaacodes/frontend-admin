'use client';

import { JobPost, data } from "@/data/jobDB";
import { MdEdit } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

export const JobRoutes = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const jobID = searchParams.get('id')

    router.push(pathname + `?id=${jobID}`)

    const job: JobPost | undefined = data.find((
        job) => job.id === parseInt(jobID as string));

    const handleEditClick = () => {
        if (jobID) {
            router.push(`/admin/job-edit?id=${jobID}`);
        }
    };
    
    if(!job){
        return (
            <div>Job not found</div>
        );
    }

    return(
        <div >
            <div className="flex items-center">
                <h1 className="text-primary font-sans text-5xl">Job Details</h1>
                <Button variant={"outline"} className="ml-6" onClick={handleEditClick}>
                    <MdEdit />
                </Button>
            </div>
            <hr  className="mt-2 mb-4 border-primary"/>
            <h2 className="text-primary-foreground text-4xl">{job?.Job_Title}</h2>
            <p className="text-xl"><strong className="text-primary-foreground">Company: </strong> {job.Company_Name}</p>
            <p><strong className="text-primary-foreground">Date Posted:</strong> {job.date_posted}</p>
            <p><strong>Location:</strong> {job.Location}</p>
            <p><strong>Source:</strong> {job.Source}</p>
            <p><strong>Description:</strong> {job.Job_Description}</p>
        </div>
    );
}