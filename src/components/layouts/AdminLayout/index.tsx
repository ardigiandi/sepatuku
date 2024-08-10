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
]

const AdminLayout = (props: PropTypes) => {

    const { children } = props

    return (
        <div>
            <Sidebar lists={listSidebarItem} />
            <div>
                {children}
            </div>
        </div>
    )
}

export default AdminLayout