import { useState } from "react";
import Sidebar from "@/components/fragments/sidebar";

type PropTypes = {
    children: React.ReactNode;
};

const listSidebarItem = [
    {
        title: 'Dashboard',
        url: '/member',
        icon: 'bxs-dashboard',
    },
    {
        title: 'Orders',
        url: '/member/orders',
        icon: 'bxs-box',
    },
    {
        title: 'Profile',
        url: '/member/profile',
        icon: 'bxs-user',
    },
];

const MemberLayout = ({ children }: PropTypes) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex">
            {/* Sidebar */}
            {isSidebarOpen && <Sidebar lists={listSidebarItem} />}

            <div className="flex-1 p-10">
                {/* Toggle Button */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 bg-black text-white rounded-md mb-4"
                >
                    {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
                </button>

                {/* Main Content */}
                {children}
            </div>
        </div>
    );
};

export default MemberLayout;
