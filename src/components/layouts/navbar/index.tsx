import { signIn, signOut, useSession } from "next-auth/react"

const Navbar = () => {
    const { data } = useSession()
    return (
        <div className="flex justify-between items-center px-10 py-5 border-b border-black">
            <h1 className="text-2xl font-semibold">Sepatuku</h1>
            <button className="bg-black text-white px-4 py-1" onClick={() => (data ? signOut() : signIn())}>{data ? "Logout" : "Login"}</button>
        </div>
    )
}

export default Navbar