import { Logo } from "./Logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="sidebar-container h-full border-r flex flex-col  shadow-lg rounded-tr-3xl relative overflow-hidden">
      <div className="flex  justify-center pb-0 logoup bg-[#1362A1] h-[170px]">
        <Logo />
      </div>

      <div className="flex flex-col w-full overflow-auto ">
        <SidebarRoutes />
      </div>
    </div>
  );
};
