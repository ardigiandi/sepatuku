import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import Link from "next/link"
import { signIn } from "next-auth/react"
import Input from "@/components/ui/input"
import Button from "@/components/ui/button"

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
        <div className="bg-slate-200 mx-auto flex flex-col h-screen items-center justify-center">
            <h1 className="text-xl font-semibold">Login</h1>
            {error && <p className="text-base font-medium text-red-600 mt-2">{error}</p>}
            <div className="bg-white border border-black mt-5 rounded-md lg:px-10 px-5 py-5">
                <form onSubmit={handleSubmit} className=" gap-3 flex flex-col">
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                    />
                    <Input
                        label="Password"
                        type="password"
                        name="password"
                    />
                    <Button
                        type="submit"
                        className="text-base font-medium bg-black text-white border mt-3 py-1 rounded-sm cursor-pointer">
                        {isLoading ? '...Loading' : 'Login'}
                    </Button>
                </form>
                <div className="w-full justify-center items-center flex mt-3 border-black py-2 rounded-sm border">
                    <Button
                        type="button"
                        onClick={() => signIn('google', { callbackUrl, redirect: false })} className="text-sm font-medium text-black">
                        Login With Google
                    </Button>
                </div>
            </div>
            <p className="text-base font-semibold mt-4">Don{"'"}t have an account? Sign up <Link href="/auth/register" className="text-blue-600">here</Link></p>
        </div>
    )
}

export default LoginViews