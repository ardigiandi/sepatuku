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

    return (
        <div className="flex">
            <Sidebar lists={listSidebarItem} />
            <div className="flex-1 p-10">
                {children}
            </div>
        </div>
    );
};

export default MemberLayout;
