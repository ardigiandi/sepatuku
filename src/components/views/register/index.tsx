import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import Link from "next/link"

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

        const result = await fetch('/api/user/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

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
        <div className="max-w-6xl mx-auto flex flex-col h-screen items-center justify-center">
            <h1 className="text-xl font-semibold">Register</h1>
            {error && <p className="text-base font-medium text-red-600 mt-2">{error}</p> }
            <div className="border border-black mt-5 rounded-md">
                <form onSubmit={handleSubmit} className="lg:px-10 px-5 py-5 gap-3 flex flex-col">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-base font-medium">Email</label>
                        <input type="email" name="email" id="email" className="border w-[300px] py-1 px-3 border-black rounded-sm" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname" className="text-base font-medium">Fullname</label>
                        <input type="text" name="fullname" id="fullname" className="border w-[300px] py-1 px-3 border-black rounded-sm" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-base font-medium">Phone</label>
                        <input type="text" name="phone" id="phone" className="border w-[300px] py-1 px-3 border-black rounded-sm" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-base font-medium">Password</label>
                        <input type="password" name="password" id="password" className="border w-[300px] py-1 px-3 border-black rounded-sm" />
                    </div>
                    <button type="submit" className="border w-full mt-4 font-medium border-black py-1 rounded-sm">
                        {isLoading ? '...Loading' : 'Register'}
                    </button>
                </form>
            </div>
            <p className="text-base font-semibold mt-4">Have an account? sign in <Link href="/auth/login" className="text-blue-600">here</Link></p>
        </div>
    )
}

export default RegisterViews