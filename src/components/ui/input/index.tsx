

type Proptypes = {
    label?: string
    name: string
    type: string
    placeholder?: string
}
const Input = (props: Proptypes) => {

    const { label, name, type, placeholder } = props

    return (
        <div className="flex flex-col gap-2">
            {label && <label htmlFor={name} className="text-base font-medium">{label}</label>}
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                className="border bg-slate-100 w-[300px] py-1 px-3 border-black rounded-sm" />
        </div>
    )
}

export default Input

    