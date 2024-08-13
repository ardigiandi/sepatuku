import Sidebar from "@/components/fragments/sidebar"

type PropTypes = {
    children: React.ReactNode
}

const listSidebarItem = [
    {
        title: 'Dashboard',
        url: '/admin',
        icon: 'bxs-dashboard'
    },
    {
        title: 'Products',
        url: '/admin/products',
        icon: 'bxs-box'
    },
    {
        title: 'Users',
        url: '/admin/users',
        icon: 'bxs-box'
    },
]

const AdminLayout = (props: PropTypes) => {

    const { children } = props

    return (
        <div className="flex">
            <Sidebar lists={listSidebarItem} />
            <div className="w-full p-10">
                {children}
            </div>
        </div>
    )
}

export default AdminLayout