const AuthLayout = ({ children }: { children: React.ReactNode}) => {
    return ( 
        <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500 to-gray-600">
            {children}
        </div>
     );
}
 
export default AuthLayout;