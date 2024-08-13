import Modal from "@/components/ui/modal"
import Input from "@/components/ui/input"
import Select from "@/components/ui/select"
import Button from "@/components/ui/button"
import { FormEvent } from "react"
import { useState } from "react"
import userServices from "@/services/user"

const ModalUpdateUser = (props: any) => {

    const { updatedUser, setUpdatedUser, setUsersData } = props
    const [isLoading, setIsLoading] = useState(false)

    const handleUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        const form: any = event.target as HTMLFormElement
        const data = {
            role: form.role.value
        }
        const result = await userServices.updateUser(updatedUser.id, data)


        if (result.status === 200) {
            form.reset()
            setIsLoading(false)
            setUpdatedUser({})
            const {data} = await userServices.getAllUsers()
            setUsersData(data.data)
        } else {
            setIsLoading(false)
        }
    }
    return (
        <Modal onClose={() => setUpdatedUser({})}>
            <h1 className="text-2xl font-semibold mb-5">Update User</h1>
            <form onSubmit={handleUpdateUser}>
            <Input
                label="Email"
                type="email"
                name="email"
                defaultValue={updatedUser.email}
                disabled
            />
            <Input
                label="Fullname"
                type="text"
                name="fullname"
                defaultValue={updatedUser.fullname}
                disabled
            />
            <Input
                label="Phone"
                type="text"
                name="phone"
                defaultValue={updatedUser.phone}
                disabled
            />
            <Select label="Role" name="role" defaultValue={updatedUser.role} options={[
                { label: "Member", value: "member" },
                { label: "Admin", value: "admin"  }
            ]}/>
            <Button type="submit" className="bg-black mt-4 text-white px-5 py-1 rounded-md">Update</Button>
            </form>
        </Modal>
    )
}

export default ModalUpdateUser

