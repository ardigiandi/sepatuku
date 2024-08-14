import ProfileMemberViews from "@/components/views/member/profile"
import { useState, useEffect } from "react"
import userServices from "@/services/user"
import { useSession } from "next-auth/react"

const ProfilePage = () => {
    const [profile, setProfile] = useState({})
    const session: any = useSession()

    useEffect(() => {
        const getAllUsers = async () => {
            const { data } = await userServices.getProfile(session.data?.accessToken)
            setProfile(data.data)
        }
        getAllUsers()
    }, [session])
    return (
        <>
            <ProfileMemberViews profile={profile} />
        </>
    )
}

export default ProfilePage