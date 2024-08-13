import UsersAdminViews from "@/components/views/admin/users"
import userServices from "@/services/user"
import { useEffect, useState } from "react"

const AdminUsersPage = () => {
    
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getAllUsers = async () => {
            const {data} = await userServices.getAllUsers()
            setUsers(data.data)
        }
        getAllUsers()
    }, [])

    return (
        <>
            <UsersAdminViews users={users} />
        </>
    )
}

export default AdminUsersPage