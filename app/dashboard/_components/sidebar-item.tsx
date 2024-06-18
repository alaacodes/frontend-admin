import { IconType } from "react-icons";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // Replace with your actual utility path
import Check from "../../../public/Check.svg";
import Uncheck from "../../../public/Uncheck.svg";
import { MdKeyboardArrowDown } from "react-icons/md"; // Import the dropdown icon

interface SubLink {
  label: string;
  href: string;
}

interface SidebarItemProps {
  icon: IconType;
  label: string;
  href: string;
  subLinks?: SubLink[];
  isActive: boolean;
  onClick: () => void;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
  subLinks,
  isActive,
  onClick,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [showSublist, setShowSublist] = useState(false);

  useEffect(() => {
    if (pathname.startsWith(href)) {
      setShowSublist(true);
    } else {
      setShowSublist(false);
    }
  }, [pathname, href]);

  const handleClick = () => {
    onClick();
    if (!subLinks) {
      router.push(href); // Navigate to the link if there are no sublinks
    } else {
      setShowSublist(!showSublist); // Toggle sublinks if they exist
    }
  };

  const [isChecked, setIsChecked] = useState(false); // State for checking

  const handleCheckToggle = () => {
    setIsChecked(!isChecked); // Toggle the checked state
  };

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className={cn(
          "flex items-center gap-x-2 text- text-black-sm font-[400] pl-6 transition-all hover:text-secondary hover:bg-gray-300",
          isActive && "text-[#1163A2] "
        )}
      >
        <div className="flex items-center gap-x-2 py-4">
          <Icon
            size={22}
            className={cn("text-primary-foreground", isActive && "")}
          />
          {label}
        </div>
        {subLinks && (
          <MdKeyboardArrowDown // Dropdown icon
            className={cn("ml-auto mr-[20px]", isActive && "")}
          />
        )}
      </button>
      <hr className="border-t border-gray-400 pl-2 mr-[20px]" />
      {subLinks && showSublist && (
        <ul className="items-center gap-x-2  text-sm font-[100] pl-6 transition-all">
          {subLinks.map((subLink, index) => (
            <li className="flex w-full" key={index}>
              <a
                className={`py-2  px-7 w-full hover:text-secondary hover:bg-gray-300 ${
                  pathname.startsWith(subLink.href) ? " text-[#1163A2]" : ""
                }`}
                href={subLink.href}
              >
                <div className="flex items-center">
                  <img
                    src={isChecked ? Check.src : Uncheck.src}
                    className="mr-[10px] h-[13px] w-auto"
                    onClick={handleCheckToggle}
                  />
                  {subLink.label}
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
