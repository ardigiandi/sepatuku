import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import Link from "next/link"
import { signIn } from "next-auth/react"
import Input from "@/components/ui/input"
import Button from "@/components/ui/button"
import AuthLayout from "@/components/layouts/AuthLayout"

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
        <AuthLayout
            title="Login"
            link="/auth/register"
            linkText="Don't have an account? Sign up">
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
        </AuthLayout>
    )
}

export default LoginViews