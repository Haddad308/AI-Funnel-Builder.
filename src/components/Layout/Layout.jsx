import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="bg-[#FBFBFE] h-screen " >
            <div className="w-11/12 h-full mx-auto " >
                <Outlet />
            </div>
        </div>
    )
}
