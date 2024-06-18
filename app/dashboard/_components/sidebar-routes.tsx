"use client";

import {
  MdBookOnline,
  MdDashboard,
  MdList,
  MdShoppingBag,
} from "react-icons/md";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const AdminRoutes = [
  {
    icon: MdDashboard,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: MdList,
    label: "Candidate List",
    href: "/admin/candidate-listing",
    subLinks: [
      {
        label: "All",
        href: "/admin/candidate-listing/all",
      },
      {
        label: "Patronship",
        href: "/admin/candidate-listing/patronship",
      },
      {
        label: "Full Program",
        href: "/admin/candidate-listing/full-program",
      },
    ],
  },
  {
    icon: MdShoppingBag,
    label: "Job List",
    href: "/admin/job-listing",
  },
  // {
  //   icon: MdBookOnline,
  //   label: "LMS",
  //   href: "/lms/courses",
  //   subLinks: [
  //     {
  //       label: "Course",
  //       href: "/lms/courses",
  //     },
  //     {
  //       label: "Analytics",
  //       href: "/lms/analytics",
  //     },
  //     {
  //       label: "Candidate Progress",
  //       href: "/lms/candidate-progress",
  //     },
  //     {
  //       label: "Quiz",
  //       href: "/lms/quiz",
  //     },
  //   ],
  // },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();
  const routes = AdminRoutes;

  // Set the active item based on the current pathname
  const getActiveRoute = () => {
    for (let route of routes) {
      if (
        route.href === pathname ||
        route.subLinks?.some((subLink) => subLink.href === pathname)
      ) {
        return route.href;
      }
    }
    return null;
  };

  const [activeItem, setActiveItem] = useState<string | null>(getActiveRoute());

  useEffect(() => {
    setActiveItem(getActiveRoute());
  }, [pathname]);

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
          subLinks={route.subLinks}
          isActive={activeItem === route.href}
          onClick={() => setActiveItem(route.href)}
        />
      ))}
    </div>
  );
};
