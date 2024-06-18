"use client";

import { usePathname } from "next/navigation";
import { UserButton } from "./auth/user-button";
import { Button } from "./ui/button";
import Link from "next/link";

export  const NavbarRoutes = () => {
    const pathname = usePathname();

    const isAdminPage = pathname?.startsWith("/admin");
    const isCandidatePage = pathname?.includes("/candidate");

    return (
        <div className="flex gap-x-2 ml-auto">
            {isAdminPage || isCandidatePage ? (
                <Link href={"/admin/courses"}>
                    <Button>
                        Profile
                    </Button>
                </Link>
            ): (
                // Please change the Link
                <Link href={"/admin"}> 
                    <Button>
                        Profile add
                    </Button>
                </Link>
            )}
            <UserButton />
        </div>
    );
}