import AdminLayout from "@/components/layouts/AdminLayout"
import Button from "@/components/ui/button"
import { useEffect, useState } from "react";
import ModalUpdateUser from "./modalupdateuser";
import 'boxicons/css/boxicons.min.css';
import ModalDeleteUser from "./modaldeleteuser";

type PropTypes = {
    users: any;
}

const UsersAdminViews = (props: PropTypes) => {
    const { users } = props
    const [updatedUser, setUpdatedUser] = useState<any>({})
    const [usersData, setUsersData] = useState([])
    const [deletedUser, setDeletedUser] = useState<any>({})


    useEffect(() => {
        setUsersData(users)
    }, [users])
    return (
        <>
            <AdminLayout>
                <div>
                    <h1 className="text-2xl font-bold">User Management</h1>
                    <table className="w-full border-spacing-0 border-collapse border border-[#ddd] text-left mt-10">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-3">#</th>
                                <th className="p-3">Fullname</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Phone</th>
                                <th className="p-3">Role</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((user: any, index: number) => (
                                <tr key={user.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">{user.fullname}</td>
                                    <td className="p-3">{user.email}</td>
                                    <td className="p-3">{user.phone}</td>
                                    <td className="p-3">{user.role}</td>
                                    <td className="p-3">
                                        <div className="flex gap-2 ">
                                            <Button
                                                type="button"
                                                className="bg-[#e9d53b] text-white py-1 px-2 rounded-md" onClick={() => setUpdatedUser(user)}>
                                                <i className='bx bx-edit' />
                                            </Button>
                                            <Button type='button' className="bg-red-600 text-white py-1 px-2 rounded-md"
                                                onClick={() => setDeletedUser(user)}>
                                                <i className='bx bx-trash' />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AdminLayout>
            {Object.keys(updatedUser).length && (
                <ModalUpdateUser
                    updatedUser={updatedUser}
                    setUpdatedUser={setUpdatedUser}
                    setUsersData={setUsersData}
                />
            )}
            {Object.keys(deletedUser).length && (
                <ModalDeleteUser
                    deletedUser={deletedUser}
                    setDeletedUser={setDeletedUser}
                    setUsersData={setUsersData}
                />
            )}
        </>
    )
}

export default UsersAdminViews
