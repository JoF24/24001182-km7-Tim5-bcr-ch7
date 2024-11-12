import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import NavigationBar from "../components/Navbar";
import TwoToneSidebar from "../components/SideBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../components/Navbar/NavigationBar.css";

const isUserLoggedIn = () => {
    const { token } = useSelector((state) => state.auth);
    if(token){
        return true;
    }else{
        return false;
    }
};

export const Route = createRootRoute({
    component: function RootComponent() {
        const [isSidebarOpen, setIsSidebarOpen] = useState(true);
        const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

        // untuk cek apakah pengguna sudah login
        const isLoggedIn = isUserLoggedIn();

        return (
            <>
                {isLoggedIn && (
                    <>
                        <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
                            <TwoToneSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                            <div className="main-content">
                                <NavigationBar toggleSidebar={toggleSidebar} />
                                <Container>
                                    <Outlet />
                                </Container>
                                <TanStackRouterDevtools />
                            </div>
                        </div>
                        <ToastContainer theme="colored" />
                    </>
                )}
                {!isLoggedIn && (
                    // tampilkan konten login atau register tanpa sidebar dan navbar
                    <>
                        <Container>
                            {/* Outlet is to detect the pathname or url and then render the component by pathname or url */}
                            <Outlet />
                        </Container>
                        {/* This is for debugging router */}
                        <TanStackRouterDevtools />

                        {/* React Toastify */}
                        <ToastContainer theme="colored" />
                    </>
                )}
            </>
        );
    },
});