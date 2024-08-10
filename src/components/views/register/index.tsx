import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import Link from "next/link"
import Input from "@/components/ui/input"
import Button from "@/components/ui/button"
import authServices from "@/services/auth"
import AuthLayout from "@/components/layouts/AuthLayout"

const RegisterViews = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const { push } = useRouter()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        setError('')
        const form = event.target as HTMLFormElement
        const data = {
            email: form.email.value,
            fullname: form.fullname.value,
            phone: form.phone.value,
            password: form.password.value
        }

        const result = await authServices.registerAccount(data)

        if (result.status === 200) {
            form.reset()
            setIsLoading(false)
            push('/auth/login')
        } else {
            setIsLoading(false)
            setError('Email is already registered')
        }
    }

    return (
        <AuthLayout title="Register" error={error} link="/auth/login" linkText="Have an account? sign in">
            <form onSubmit={handleSubmit} className="lg:px-10 px-5 py-5 gap-3 flex flex-col">
                <Input
                    label="Email"
                    type="email"
                    name="email"
                />
                <Input
                    label="Fullname"
                    type="text"
                    name="fullname"
                />
                <Input
                    label="Phone"
                    type="text"
                    name="phone"
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                />
                <Button
                    type="submit"
                    className="border bg-black text-white w-full mt-3 font-medium border-black py-1 rounded-sm">
                    {isLoading ? '...Loading' : 'Register'}
                </Button>
            </form>
        </AuthLayout>

    )
}

export default RegisterViews