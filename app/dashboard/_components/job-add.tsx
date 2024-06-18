'use client';

import { JobPost, data } from "@/data/jobDB";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { 
    Form, 
    FormControl,
    FormDescription,
    FormField, 
    FormLabel,
    FormMessage,
    FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import toast from "react-hot-toast";

const jobFormSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required!",
    }),
   
})

export const JobAdd = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const jobID = searchParams.get('id')

    // router.push(pathname + `?id=${jobID}`)

    // const job: JobPost | undefined = data.find((
    //     job) => job.id === parseInt(jobID as string));
    

    const form = useForm<z.infer<typeof jobFormSchema>>({
        resolver: zodResolver(jobFormSchema), 
        defaultValues: {
            title: ""
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof jobFormSchema>) => {
        try{
            const response = await axios.post("/api/Job", values);
            router.push(`/admin/job-data/${response.data.id}`);
        } catch (error) {
            toast.error("Something went wrong");
            
        }
    }

    // if(!job){
    //     return (
    //         <div>Job not found</div>
    //     );
    // }


    return(
        <div >
            <div className="flex items-center">
                <h1 className="text-primary font-sans text-5xl">Job Details</h1> 
            </div>
            <hr  className="mt-2 mb-4 border-primary"/>
            <div className="max-w-6xl  flex md:items-center h-full p-4">
            <div>
                <h2 className="text-primary-foreground text-3xl">New Job</h2>
                <p>
                    None
                </p>
                <Form {...form}>
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 mt-8"
                    >
                        <FormField 
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Job Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input 
                                            disabled={isSubmitting}
                                            placeholder="eg. Fullstack developer "
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Job Title is added here
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center gap-x-2">
                            <Link href={`/admin/job-data?id=${jobID}`} >
                                <Button
                                    type="button"
                                    variant="outline"
                                >
                                    Cancel
                                </Button>
                            </Link>
                            <Button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                            >
                                Continue
                            </Button>
                        </div>
                    </form>
                </Form>
                </div>
            </div>
        </div>
    );
}