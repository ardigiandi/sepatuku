import { useRouter } from "next/router"
import Link from "next/link"
import Button from "@/components/ui/button"
import { signOut } from "next-auth/react"

type PropTypes = {
    lists: Array<{
        title: string
        url: string
        icon: string
    }>
}

const Sidebar = (props: PropTypes) => {

    const { lists } = props
    const { pathname } = useRouter()

    return (
        <div className="bg-black flex flex-col justify-between text-white p-6 w-[250px] h-screen">
            <div className="flex flex-col mt-4">
                <h1 className="text-2xl font-bold">Admin Panel</h1>
                <div className="flex flex-col gap-5 mt-10 transition duration-500">
                    {lists.map((list, index) => (
                        <Link href={list.url} key={list.title} className={`${'rounded-md hover:bg-white hover:text-black p-3 transition duration-500'} ${pathname === list.url && ' bg-white'}}`}>
                            <i className={`bx ${list.icon}`} />
                            <h2 className="text-base font-medium">{list.title}</h2>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="bg-white text-black rounded-md">
                <Button className="w-full py-2" type="button" onClick={() => signOut()}>Logout</Button>
            </div>
        </div>
    )
}

export default Sidebar