import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import Link from "next/link"
import { signIn } from "next-auth/react"

const LoginViews = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const { push, query } = useRouter()

    const callbackUrl: any = query.callbackUrl || '/'

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        setError('')
        const form = event.target as HTMLFormElement
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: form.email.value,
                password: form.password.value,
                callbackUrl
            })

            if (!res?.error) {
                setIsLoading(false)
                form.reset()
                push(callbackUrl)
            } else {
                setIsLoading(false)
                setError("Email or password is incorrect")
            }
        } catch (error) {
            setIsLoading(false)
            setError("Email or password is incorrect")
        }
    }

    return (
        <div className="max-w-6xl mx-auto flex flex-col h-screen items-center justify-center">
            <h1 className="text-xl font-semibold">Login</h1>
            {error && <p className="text-base font-medium text-red-600 mt-2">{error}</p>}
            <div className="border border-black mt-5 rounded-md lg:px-10 px-5 py-5">
                <form onSubmit={handleSubmit} className=" gap-3 flex flex-col">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-base font-medium">Email</label>
                        <input type="email" name="email" id="email" className="border w-[300px] py-1 px-3 border-black rounded-sm" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-base font-medium">Password</label>
                        <input type="password" name="password" id="password" className="border w-[300px] py-1 px-3 border-black rounded-sm" />
                    </div>
                    <button type="submit" className="border w-full mt-4 font-medium border-black py-1 rounded-sm">
                        {isLoading ? '...Loading' : 'Login'}
                    </button>
                </form>
                <div className="border w-full justify-center items-center flex px-8 mt-2 border-black py-1 rounded-sm bg-black">
                    <button className="text-sm font-light text-white" type="button" onClick={() => signIn('google', { callbackUrl, redirect: false })}>Login With Google</button>
                </div>
            </div>
            <p className="text-base font-semibold mt-4">Don{"'"}t have an account? Sign up <Link href="/auth/register" className="text-blue-600">here</Link></p>
        </div>
    )
}

export default LoginViews