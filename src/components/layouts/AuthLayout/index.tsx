import Link from "next/link"

type PropTypes = {
    error?: string
    title?: string
    children: React.ReactNode
    link: string
    linkText: string
}

const AuthLayout = (props: PropTypes) => {

    const { error, title, children, link, linkText } = props

    return (
        <div className="bg-slate-200 mx-auto flex flex-col h-screen items-center justify-center px-5">
            <h1 className="text-xl font-semibold">{title}</h1>
            {error && <p className="text-base font-medium text-red-600 mt-2">{error}</p>}
            <div className="bg-white border border-black mt-5 rounded-md px-5 py-5 lg:w-[450px] w-full">
                {children}
            </div>
            <p className="text-base font-semibold mt-4">
                {linkText}
                <Link href={link} className="text-blue-600"> here</Link>
            </p>
        </div>
    )
}

export default AuthLayout