"use client"
import { LoginForm } from "@/components/auth/login-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
    const [user, setUserData] = useState<any>(null); // Added type for user state
    const [token, setUserToken] = useState<string | null>(null); // Added type for token state
    const router = useRouter();

    useEffect(() => {
      // Use useEffect for initialization
      const storedUser = localStorage.getItem('AD_userData');
      const storedToken = localStorage.getItem('AD_userToken');
      if (storedUser) {
        //setUserData(JSON.parse(storedUser)); // Parse stored user data
      }
      if (storedToken) {
        setUserToken(storedToken);
      }
    }, []); // Run only on initial render
  
    useEffect(() => {
      // Redirect if user and token are present
      if (user && token) {
        router.push('/admin');
      }
    }, [user, token, router]); // Run whenever user or token changes
  
    return ( 
        <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500 to-gray-600"  style={{justifyContent:"center", alignItems:"center", width:"100%", display:"flex", minHeight:"100vh"}}>
            <LoginForm />
        </div>
     );
}
 
export default LoginPage;
