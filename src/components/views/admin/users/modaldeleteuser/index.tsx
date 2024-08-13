import Button from "@/components/ui/button"
import userServices from "@/services/user"
import Modal from "@/components/ui/modal"
import { useSession } from "next-auth/react"

const ModalDeleteUser = (props: any) => {
    const { deletedUser, setDeletedUser, setUsersData } = props
    const session: any = useSession()
    

    const handleDelete = async () => {
        userServices.deleteUser(deletedUser.id, session.data?.accessToken)
        setDeletedUser({})
        const { data } = await userServices.getAllUsers()
        setUsersData(data.data)
    }

    return (
        <Modal onClose={() => setDeletedUser({})}>
            <h1 className="text-2xl font-semibold">Are you sure?</h1>
            <Button type="button" className="bg-red-700 px-4 py-1 rounded-md mt-3 text-white" onClick={() => handleDelete()}>
                Delete
            </Button>
        </Modal>
    )
}

export default ModalDeleteUser