"use client";
import { useEffect, useState } from "react";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserData] = useState<any>(null); // Added type for user state
  const [token, setUserToken] = useState<string | null>(null); // Added type for token state
  const router = useRouter();

  // useEffect(() => {
  //   // Use useEffect for initialization
  //   const storedUser = localStorage.getItem("AD_userData");
  //   const storedToken = localStorage.getItem("AD_userToken");
  //   if (storedUser) {
  //     setUserData(JSON.parse(storedUser)); // Parse stored user data
  //   }
  //   if (storedToken) {
  //     setUserToken(storedToken);
  //   }
  // }, []); // Run only on initial render

  // useEffect(() => {
  //   // Redirect if user and token are present
  //   const token = localStorage.getItem("AD_userToken");
  //   if (!token) {
  //     router.push("/");
  //   }
  // }, [user, token, router]); // Run whenever user or token changes

  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-80 mt-[80px] h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
