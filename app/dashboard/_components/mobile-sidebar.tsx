
import { MdMenu } from "react-icons/md";
import { Sidebar } from "./sidebar";
import {
    Sheet,
    SheetContent,
    SheetTrigger 
} from "@/components/ui/sheet";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
                <MdMenu />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-white">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}