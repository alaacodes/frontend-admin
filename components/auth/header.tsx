import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";


const font = Poppins({
    subsets:  ["latin"],
    weight: ["600"],
});

interface HeaderProps {
    label: string;
};

export const Header = ({
    label
}: HeaderProps) => {

    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <Image src="/Logo.png" alt="Talents2Germany Logo"  height={100} width={220} className="p-8" />
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    );
};